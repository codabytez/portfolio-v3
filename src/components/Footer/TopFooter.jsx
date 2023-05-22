import React from "react";
import Logo from "../Navbar/Logo";
import Social from "../Navbar/Social";
import Phone from "./Phone";

const TopFooter = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className=" w-[calc(50%)]">
        <Logo />
      </div>
      <div className="flex justify-evenly w-[calc(30%)]">
        <Phone href="tell:+23412345678" text="+23412345678" />
        <Phone href="mailto:demo@example.com" text="demo@example.com" />
      </div>
      <div className=" w-[calc(20%)] pr-10">
        <Social />
      </div>
    </div>
  );
};

export default TopFooter;
