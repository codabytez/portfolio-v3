import React from "react";
import TopFooter from "./topFooter";
import LowerFooter from "./LowerFooter";

var date = new Date();
var year = date.getFullYear();

const Footer = () => {
  return (
    <div className="w-[calc(90%)] m-auto mt-40">
      <TopFooter />
      <hr className="bg-gray-300 h-1 my-5" />
      <LowerFooter />
      <div className="flex justify-center text-gray-400 italic font-extrabold">
        <p>Copyright © {year} </p>
      </div>
    </div>
  );
};

export default Footer;
