import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const Live = (props) => {
  return (
    <div className="rounded-t-3xl overflow-hidden transition ease-in-out duration-200 relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-content rounded-xl group hover:bg-content hover:cursor-default dark:shadow-md dark:shadow-content">
      <img className="w-full h-72 group-hover:opacity-10" src={props.src} alt={props.alt} />
      <div className="">
        <h3 className=" text-2xl text-solid font-bold capitalize tracking-wider px-6 py-4 group-hover:opacity-10 dark:text-darkSolid">{props.title}</h3>
        <p className="pb-4 pt-2 text-content text-lg tracking-wide px-6 py-4 group-hover:opacity-10 dark:text-darkContent">{props.description}</p>
        <p className="text-base font-semibold text-content tracking-wider px-6 py-4 group-hover:opacity-50 dark:text-darkContent">
          <span className="text-solid dark:text-darkSolid">Tech Stack: </span>
          {props.stack}
        </p>
        <div className="justify-evenly py-4 hidden group-hover:flex w-full basis-full absolute top-[50%] translate-x-[0%] translate-y-[-50%]">
          <a
            href={props.preview} target="_blank"
            className="flex items-center text-center py-3 px-2 bg-btnSuccess rounded-lg text-btnText font-bold cursor-pointer text-sm lg:text-lg hover:bg-stone-300 transition duration-200 ease-in hover:transform hover:scale-105"
          >
            <FaLink />
            <span className="px-1 md:px-3 ">Live Preview</span>
          </a>
          <a
            href={props.github} target="_blank"
            className="flex items-center text-center py-3 px-2 bg-btnSuccess rounded-lg text-btnText font-bold cursor-pointer text-sm lg:text-lg hover:bg-stone-300 transition duration-200 ease-in transform hover:scale-105"
          >
            <FaGithub /> <span className="px-1 md:px-3 ">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Live;
