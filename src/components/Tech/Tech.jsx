import React from "react";
import technologies from "./technologies";
import Stack from "./Stack";

const Tech = () => {
  return (
    <div id="tech" className="max-w-[1400px] min-w-[300px] m-auto md:pl-20 md:pr-10 p-4 py-16 min-h-[800px] bg-light dark:bg-dark border-t-4 border-content dark:border-content">
      <div className="text-center lg:w-[900px] p-5">
        <h className="flex font-extrabold text-5xl py-5 text-solid dark:text-darkSolid">
          Tech Stack
        </h>
        <h3 className="flex py-3 font-semibold text-3xl text-content dark:text-darkContent">
          Technologies I’ve been working with recently
        </h3>
      </div>
      <div className="flex flex-wrap pt-10 m-auto justify-center">
        {technologies.map((stack) => (
          <Stack key={stack.id} src={stack.src} alt={stack.alt} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
