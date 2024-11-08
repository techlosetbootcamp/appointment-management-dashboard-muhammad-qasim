import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import {
  setAvailability,
  fetchAvailabilityData,
} from "@/store/slice/availabilitySlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { validateAvailabilityData } from "@/constants/FormSchema";
import { SelectOption } from "@/types/types";

export const useSelectAvailability = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  return {
    selectedDays,
    setSelectedDays,
    setStartHour,
    setEndHour,
    startHour,
    endHour,
  };
};

export const useSubmitAvailability = () => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (startHour: string, endHour: string, selectedDays: string[]) => {
      try {
        const errors = validateAvailabilityData({
          startHour,
          endHour,
          selectedDays,
        });
        if (Object.keys(errors).length > 0) {
          Object.values(errors).forEach((message) => toast.error(message));
          return;
        }

        if (session?.user?.id) {
          await dispatch(
            setAvailability({
              startHour: startHour,
              endHour: endHour,
              days: selectedDays,
              userId: session?.user?.id,
            })
          ).unwrap();
          router.push("/eventBooking");
        }
      } catch (error) {
        toast.error("An error occurred while saving availability.");
      }
    },
    [dispatch, session, router]
  );

  return { handleSubmit };
};

export const useFetchAvailability = (
  setStartHour: (value: string) => void,
  setEndHour: (value: string) => void,
  setSelectedDays: (value: string[]) => void
) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const dispatch = useAppDispatch();
  const { isLoading, isError, availabilityData } = useAppSelector(
    (state) => state.availability
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchAvailabilityData(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (availabilityData) {
      setStartHour(availabilityData?.startHour);
      setEndHour(availabilityData?.endHour);
      setSelectedDays(availabilityData?.days);
    }
  }, [availabilityData, setStartHour, setEndHour, setSelectedDays]);

  return { isLoading, isError };
};

export const useSelectOptions = (
  initialStartHours: string[],
  initialEndHours: string[],
  setStartHour: (value: string) => void,
  setEndHour: (value: string) => void
) => {
  const startingHoursOptions: SelectOption[] = initialStartHours.map(
    (hour) => ({
      value: hour,
      label: hour,
    })
  );

  const endingHoursOptions: SelectOption[] = initialEndHours.map((hour) => ({
    value: hour,
    label: hour,
  }));

  const handleStartHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartHour(e.target.value);
  };

  const handleEndHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndHour(e.target.value);
  };

  return {
    startingHoursOptions,
    endingHoursOptions,
    handleStartHourChange,
    handleEndHourChange,
  };
};
