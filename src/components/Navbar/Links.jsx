import React from "react";
import { AiOutlineHome, AiOutlineLaptop, AiOutlineMail, AiOutlineProject, AiOutlineUserAdd } from "react-icons/ai";

const Links = () => {
  return (
    <div className="max-w-[1400px] m-auto" >
      <div className="md:block hidden fixed top-[25%] z-10 ">
        <div className="flex flex-col">
          <a href="#main" className="rounded-full shadow-lg bg-darkSolid text-content m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-darkContent dark:shadow-content dark:text-darkContent dark:bg-solid">
            <AiOutlineHome size={20} />
          </a>

          <a href="#about" className="rounded-full shadow-lg bg-darkSolid text-content m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-darkContent dark:shadow-content dark:text-darkContent dark:bg-solid">
            <AiOutlineUserAdd size={20} />
          </a>

          <a href="#tech" className="rounded-full shadow-lg bg-darkSolid text-content m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-darkContent dark:shadow-content dark:text-darkContent dark:bg-solid">
            <AiOutlineLaptop size={20} />
          </a>

          <a href="#project" className="rounded-full shadow-lg bg-darkSolid text-content m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-darkContent dark:shadow-content dark:text-darkContent dark:bg-solid">
            <AiOutlineProject size={20} />
          </a>

          <a href="#contact" className="rounded-full shadow-lg bg-darkSolid text-content m-3 p-4 cursor-pointer hover:scale-150 ease-in duration-300 shadow-darkContent dark:shadow-content dark:text-darkContent dark:bg-solid">
            <AiOutlineMail size={20} />
          </a>

        </div>
      </div>
    </div>

  );
};

export default Links;
