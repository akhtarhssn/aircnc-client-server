import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* logo */}
            <div>
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            {/* search */}
            <div>
              <h1>Search</h1>
            </div>
            {/* menu */}
            <div>
              <h1>Menu</h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
