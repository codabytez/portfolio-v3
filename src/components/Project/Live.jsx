import React from "react";
import myProject from "../myProject";
import { FaLink, FaGithub } from "react-icons/fa";

// console.log(myProject);

const Live = (props) => {
  return (
    <div className=" rounded-t-3xl overflow-hidden drop-shadow-2xl shadow-md shadow-gray-400">
      <img className="w-full h-64" src={props.src} alt={props.alt} />
      <div className="px-7 py-4">
        <h3 className=" text-2xl font-bold capitalize">{props.title}</h3>
        <p className="text-lg pt-5">{props.description}</p>
        <p className="text-sm py-4 font-semibold text-slate-500">
          <span className="font-extrabold">Tech Stack: </span>
          {props.stack}
        </p>
        <div className="flex justify-between py-4">
          <a
            href={props.preview}
            className="flex items-center hover:text-gray-400"
          >
            <FaLink />
            <span className="px-3 ">Live Preview</span>
          </a>
          <a
            href={props.github}
            className="flex items-center hover:text-gray-400"
          >
            <FaGithub /> <span className="px-3 ">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Live;
