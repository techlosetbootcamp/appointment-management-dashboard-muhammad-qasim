import React from "react";
import Image from "next/image";
import { circle, details } from "../../../public";

const EventList = ({
  events,
  title,
}: {
  events: any;
  title: string;
}): JSX.Element => {
  return (
    <>
      {events.length > 0 ? (
        events.map((event: any) => (
          <div key={event.id}>
            <div className="px-[24px] py-[17px] border-b-[1px] border-solid border-[#CCCCCC]">
              <h2 className="font-inter font-[700] text-[14.88px] leading-[24px] text-[#1A1A1A]">
                {event.selectedDate}
              </h2>
            </div>
            <div className="flex flex-row justify-between items-center px-6 py-6 font-inter font-normal leading-[24px] text-gray-900 border-b-[1px] border-solid border-gray-300">
              <div className="flex flex-row space-x-2 items-center">
                <Image src={circle} alt="circle" width={30} height={30} />
                <p className="text-[13.88px]">{event.selectedTime}</p>
              </div>
              <div>
                <h3 className="font-bold text-[14.13px]">
                  {event.schedulerName}
                </h3>
                <p className="text-[14.75px]">
                  Event type{" "}
                  <span className="font-bold">30 Minute Meeting</span>
                </p>
              </div>
              <div>
                <p className="text-[14.5px]">1 host | 0 non-hosts</p>
              </div>
              <div className="flex flex-row items-center space-x-[6px]">
                <Image src={details} alt="details" width={10} height={14} />
                <p className="text-[14.88px] leading-[22.4px] text-gray-600">
                  Details
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="px-[24px] py-[17px] border-b-[1px] border-solid border-[#CCCCCC]">
          <h2 className="font-inter font-[700] text-[14.88px] leading-[24px] text-[#1A1A1A]">
            No {title} events
          </h2>
        </div>
      )}
    </>
  );
};

export default EventList;
