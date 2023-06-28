import React from "react";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Air CNC Logo"
      width={"100"}
      height={"100"}
      className="hidden md:block"
    />
  );
};

export default Logo;
