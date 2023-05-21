import React from "react";
import myProject from "../myProject";
import Live from "./Live";

function prj(card) {
  return (
    <Live
      key={card.key}
      src={card.src}
      alt={card.alt}
      title={card.title}
      description={card.description}
      stack={card.stack}
      preview={card.preview}
      github={card.github}
    />
  );
}

const Project = () => {
  return (
    <div className="w-[calc(90%)] m-auto">
      <div>
        <h1 className="flex justify-center font-extrabold text-4xl py-5 pt-10">
          Projects
        </h1>
        <h3 className="flex justify-center py-3 font-semibold text-2xl pb-10">
          Things I’ve built so far
        </h3>
      </div>
      <div className=" grid grid-cols-3 gap-10 ">{myProject.map(prj)}</div>
    </div>
  );
};

export default Project;
