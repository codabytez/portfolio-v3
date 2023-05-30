import React from "react";
import HeroImage from "../../assets/godshepherdly.jpg";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div id="main" className="max-w-[1040px] max-h-[1000px] m-auto pr-10 md:pl-20 p-4 py-6">
      <div className="m-auto h-screen w-full flex flex-col md:flex-row justify-center">

        <div className="basis-2/3 flex w-full h-full justify-center items-center md:order-2">
          <div className="w-[300px] h-[300px] flex justify-center items-center rounded-full overflow-hidden bg-gradient-to-t from-sky-500 to-pink-600">
            <img
              src={HeroImage}
              alt="Obinna Chidi"
              className="rounded-full w-[290px] h-[290px]"
            />
          </div>
        </div>


        <div className="w-full m-auto flex flex-col items-center md:items-start justify-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm <span className="name block leading-relaxed">Obinna Chidi</span>
          </h1>
          {/* <h2 className="sm:text-4xl text-3xl font-medium text-gray-800">
              I'm a
            </h2> */}
          <span className="sm:text-4xl text-3xl font-bold name">
            <TypeAnimation
              sequence={[
                ' Web Developer.',
                500,
                ' Web Designer.', //  Continuing previous Text
                500,
                'Music Lover.',
                500,


              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                padding: '5px',
                display: 'inline'
              }}
            />
            <hr className="w-full h-2 mt-px animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 font-black" />
          </span>
        </div>



      </div>
    </div >









    // <div className="flex flex-col lg:flex-row items-center h-[calc(100vh-20px)] w-[calc(90%)] mx-auto mb-28">
    //   <div className="flex basis-3/5 items-center">
    //     <h1 className="mt-20 lg:ml-12 font-extrabold text-3xl md:text-4xl leading-[calc(70px)] text-center lg:text-left">
    //       <span className="lg:block pb-1">Hi, </span>
    //       <span className="lg:block pb-1">My name is</span>
    //       <span className="block name text-5xl py-4 lg:py-1">Obinna Chidi</span>
    //       <span className="block leading-normal">I build things for the web</span>
    //     </h1>
    //   </div>

    //   <div className=" flex basis-1/2 justify-end items-start">
    //     <div className="flex rounded-full  md:w-[calc(320px+10px)] md:h-[calc(320px+10px)] overflow-hidden items-center justify-center lg:mr-10 bg-gradient-to-t from-sky-500 to-pink-600">
    //       <img
    //         src={HeroImage}
    //         alt="Obinna Chidi"
    //         className="md:w-80 md:h-80 rounded-full justify-center flex items-center"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
