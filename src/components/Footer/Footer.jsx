import React from "react";
import LowerFooter from "./LowerFooter";
import Social from "./Social";


const Footer = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 pb-1 pt-16">
      <hr className="bg-gray-300 h-1 my-5" />
      <LowerFooter />
      <Social />
    </div>
  );
};

export default Footer;
