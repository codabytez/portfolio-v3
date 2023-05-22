import React from "react";
import HeroImage from "../../assets/godshepherdly.jpg";

const Hero = () => {
  return (
    <div className="flex items-center h-[calc(100vh-20px)] w-[calc(90%)] mx-auto">
      <div className="flex basis-3/5 items-center">
        <h1 className="ml-12 font-extrabold text-4xl leading-[calc(70px)]">
          <span className="block pb-1">Hi</span>
          <span className="block pb-1">My name is</span>
          <span className="name text-5xl">Obinna Chidi</span>
          <span className="block">I build things for the web</span>
        </h1>
      </div>

      <div className=" flex basis-1/2 justify-end">
        <div className="flex rounded-full  w-[calc(320px+10px)] h-[calc(320px+10px)] overflow-hidden items-center justify-center mr-10 bg-gradient-to-t from-sky-500 to-pink-600">
          <img
            src={HeroImage}
            alt="Obinna Chidi"
            className="w-80 h-80 rounded-full justify-center flex items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
