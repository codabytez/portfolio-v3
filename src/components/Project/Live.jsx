import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const Live = (props) => {
  return (
    <div className="rounded-t-3xl overflow-hidden transition ease-in-out duration-300 relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-gray-200 to-blue-500">
      <img className="w-full h-64 group-hover:opacity-10" src={props.src} alt={props.alt} />
      <div className="">
        <h3 className=" text-2xl font-bold capitalize tracking-wider px-6 py-4 group-hover:opacity-10">{props.title}</h3>
        <p className="pb-4 pt-2 text-xl tracking-wide px-6 py-4 group-hover:opacity-10">{props.description}</p>
        <p className="text-lg font-semibold text-slate-500 capitalize italic tracking-wider px-6 py-4 group-hover:opacity-50">
          <span className="font-extrabold uppercase">Tech Stack: </span>
          {props.stack}
        </p>
        <div className="justify-evenly py-4 hidden group-hover:flex w-full basis-full absolute top-[50%] translate-x-[0%] translate-y-[-50%]">
          <a
            href={props.preview}
            className="flex items-center text-center py-3 px-2 rounded bg-white text-gray-700 font-bold cursor-pointer text-sm md:text-base lg:text-lg"
          >
            <FaLink />
            <span className="px-1 md:px-3">Live Preview</span>
          </a>
          <a
            href={props.github}
            className="flex items-center text-center py-3 px-2 rounded bg-white text-gray-700 font-bold cursor-pointer text-sm md:text-base lg:text-lg"
          >
            <FaGithub /> <span className="px-1 md:px-3 ">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Live;
