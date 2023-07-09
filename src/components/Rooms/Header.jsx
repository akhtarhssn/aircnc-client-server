import React from "react";
import Heading from "../Shared/Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title={`Veluvana Bali - Owl Bamboo House`}
        subtitle={"Please Select Other Categories"}
        center={false}
      />
      <div className="w-full md:h-[50vh] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover object-center"
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt="Header Image"
        />
      </div>
    </>
  );
};

export default Header;
