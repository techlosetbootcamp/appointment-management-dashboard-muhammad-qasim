import Image from "next/image";
import {
  checkmark,
  newWindow,
  person,
  briefcase,
  globe,
  topCornerImage,
} from "../../../public";

export default function MeetingConfirm({
  hostName,
  selectedTime,
  timezone,
  date,
}: {
  hostName: string | null;
  selectedTime: string | null;
  timezone: string | null;
  date: string | null;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-[66px]">
      <div className="w-[75%] text-center border border-solid border-[#DADADA] shadow p-8 relative ">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex flex-col  sm:flex-row items-center">
            <div className="mr-[8px] flex">
              <Image src={checkmark} width={20} height={20} alt="checkmark" />
            </div>
            <h1 className="font-inter font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px]">
              You are scheduled
            </h1>
          </div>
          <div className="font-inter font-[400] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[22px] text-[#1A1A1A] text-center px-4">
            <p>A calendar invitation has been sent to your email address</p>
          </div>
          <div className="flex ">
            <button className="font-inter py-[10px] px-[24px] border border-solid border-[#1A1A1A] rounded-[40px] font-[500] text-[12px] leading-[16px]  sm:text-[14px] sm:leading-[22px] text-[#1A1A1A] flex items-center">
              Open invitation
              <span className="ml-2">
                <Image
                  src={newWindow}
                  alt="newWindow"
                  className=""
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </div>
          <div className="border border-solid border-[#DADADA] w-full max-w-[445px] rounded-[8px] px-[16px] py-[16px] space-y-[14px]">
            <h2 className="font-inter font-[700] text-[16px] leading-[18px] sm:text-[22px] sm:leading-[22px] text-[#1A1A1A] text-start">
              30 Minutes Meeting
            </h2>
            <div className="flex flex-col sm:flex-row items-center font-inter font-[400] text-[14px] leading-[22px] text-[#1A1A1A9C]">
              <Image
                src={person}
                alt="person"
                className="mr-[8px]"
                width={24}
                height={24}
              />
              {hostName}
            </div>
            <div className="flex flex-col sm:flex-row items-center font-inter font-[400] text-[14px] leading-[22px] text-[#1A1A1A9C]">
              <Image
                src={briefcase}
                alt="briefcase"
                className="mr-[8px]"
                width={24}
                height={24}
              />
              {selectedTime}, {date}
            </div>
            <div className="flex flex-col sm:flex-row items-center font-inter font-[400] text-[14px] leading-[22px] text-[#1A1A1A9C]">
              <Image
                src={globe}
                alt="globe"
                className="mr-[8px]"
                width={24}
                height={24}
              />
              {timezone}
            </div>
          </div>
        </div>
        <div>
          <Image
            src={topCornerImage}
            alt="topCornerImage"
            className="absolute top-0 right-0 w-[80px] h-[80px] sm:w-[105px] sm:h-[105px]"
            width={105}
            height={105}
          />
        </div>
      </div>
    </div>
  );
}
