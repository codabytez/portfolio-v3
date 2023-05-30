import React from "react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import Social from "./Social";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const click = () => {
    setIsOpen(!isOpen);
  }
  // const navStyle = "h-20 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600";


  return (
    <div onClick={click}>
      {/* <AiOutlineMenu className="fixed top-4 right-4 z-30 md:hidden cursor-pointer" onClick={click} /> */}


      <div>

        <button data-collapse-toggle="navbar-sticky" type="button" className="fixed top-4 right-4 z-30 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 " aria-controls="navbar-sticky" aria-expanded="false" onClick={click}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 active:transform active:rotate-180 transition-all duration-700 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 active:transform active:-rotate-180 transition-all duration-700 ease-in-out"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed w-full h-full bg-white/90 flex flex-col justify-center items-center z-20 transition ease-in duration-1000 md:hidden">
          <a onClick={click}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-300 hover:shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition ease-in duration-200">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>

          <a onClick={click}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-300 hover:shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>

          <a onClick={click}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-300 hover:shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a onClick={click}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-300 hover:shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>

          <a onClick={click}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-300 hover:shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>

        </div>
      )}


      <div className="md:block hidden fixed top-[25%] z-10 ">
        <div className="flex flex-col">
          <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-gray-600">
            <AiOutlineHome size={20} />
          </a>

          <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-gray-600">
            <GrProjects size={20} />
          </a>
          <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-gray-600">
            <AiOutlineProject size={20} />
          </a>
          <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-gray-600">
            <BsPerson size={20} />
          </a>
          <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-gray-600">
            <AiOutlineMail size={20} />
          </a>

        </div>
      </div>

    </div>
  );
};

export default Navbar;



    // <div className=" fixed w-full border-2 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">



    //   <nav className=" navbar bg-base-100 shadow-lg px-4 sm:px-8 h-20">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <div className=" w-1/5     flex-1">
    //         <Logo />
    //       </div>

    //       <div className="md:order-3">
    //         <Social />
    //       </div>

    //       <div className="flex-none">
    //         <label className="swap swap-rotate">

    //           <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />

    //           <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

    //           <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

    //         </label>
    //       </div>

    //       <div className="flex md:order-2">

    //         <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={click}>
    //           {isOpen ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 active:transform active:rotate-180 transition-all duration-700 ease-in-out"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 active:transform active:-rotate-180 transition-all duration-700 ease-in-out"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //       <div className={`${isOpen && "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1 flex-col h-screen"`}>
    //         <Links />
    //       </div>
    //     </div>
    //   </nav>

    // </div>