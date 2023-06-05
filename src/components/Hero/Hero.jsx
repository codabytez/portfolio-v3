import React from "react";
import HeroImage from "../../assets/MacMemoji.svg";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div id="main" className="max-w-[1400px] min-w-[300px] m-auto pr-10 md:px-20 p-4 py-6 bg-light dark:bg-dark ">
      <div className="m-auto h-[calc(100vh-70px)] md:h-screen w-full flex flex-col md:flex-row justify-center">

        <div className="basis-2/3 flex w-full h-full justify-center items-center md:order-2">
          <div className="w-[100%] h-[100%] flex justify-center items-center rounded-full overflow-hidden">
            <img
              src={HeroImage}
              alt="Obinna Chidi"
              className="rounded-full w-60 h-60 sm:w-1/2 md:w-full lg:w-[90%] sm:h-auto bg-gradient-to-r from-gradient-100 to-gradient-200 p-2"
            />
          </div>
        </div>


        <div className="md:w-full m-auto flex flex-col items-start md:items-start justify-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-solid dark:text-darkSolid">
            I'm <span className="name block leading-relaxed">Obinna Chidi</span>
          </h1>
          {/* <h2 className="sm:text-4xl text-3xl font-medium text-gray-800">
              I'm a
            </h2> */}
          <span className="sm:text-4xl text-[26px] font-bold name">
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
            <p className="w-full h-1.5 mt-px animate-text bg-gradient-to-r from-gradient-100 to-gradient-200 font-black" />
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
