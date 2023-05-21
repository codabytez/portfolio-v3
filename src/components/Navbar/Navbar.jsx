import React from "react";
import reactLogo from "../../assets/logo.svg";
import Links from "./Links";
import Social from "./Social";

const Navbar = () => {
  return (
    <div className="flex container justify-center m-auto h-20 w-[calc(90%)] mx-auto shadow-xl">
      <div className="flex p-1.5 justify-between container">
        <div className="pl-8 logo border-solid basis-1/5 justify-start flex items-center">
          <img src={reactLogo} className="h-14 w-32" alt="React logo" />
        </div>

        <Links />
        <Social />
      </div>
    </div>
  );
};

export default Navbar;
