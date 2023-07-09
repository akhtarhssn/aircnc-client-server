import React from "react";
import Calendar from "../Rooms/Calendar";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] p-3 border-neutral-200 overflow-hidden col-span-3 order-first md:order-last">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$200</div>
        <div className="font-light text-neutral-500">night</div>
      </div>
      <hr />
      <Calendar />
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="px-4 flex flex-row items-center justify-between font-semibold text-lg py-2">
        <div>Total</div>
        <div>$300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
