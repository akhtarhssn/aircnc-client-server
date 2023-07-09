import React from "react";
import Container from "../../components/Shared/Container";
import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-8 md:gap-10 mt-6">
            <RoomInfo />
            <RoomReservation />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
