import { AxiosInstance } from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { SetAvailabilityProps,AvailabilityState } from "@/types/types";


const initialState: AvailabilityState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const setAvailability = createAsyncThunk(
  "availability/setAvailability",
  async (
    { startHour, endHour, days, userId }: SetAvailabilityProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await AxiosInstance.post("/availability", {
        startHour,
        endHour,
        days,
        userId,
      });

      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAvailability = createAsyncThunk(
  "availability/getAvailability",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        `/availability?userId=${userId}`
      );
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAvailability.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(setAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(setAvailability.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAvailability.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(getAvailability.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default availabilitySlice.reducer;