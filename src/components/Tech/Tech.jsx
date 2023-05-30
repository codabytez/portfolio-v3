import React from "react";
import technologies from "./technologies";
import Stack from "./Stack";

const Tech = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 min-h-[800px]">
      <div className="text-center">
        <h className="flex justify-center font-extrabold text-4xl py-5">
          My Tech Stack
        </h>
        <h3 className="flex justify-center py-3 font-semibold text-2xl">
          Technologies I’ve been working with recently
        </h3>
      </div>
      <div className="flex flex-wrap pt-10 m-auto justify-center">
        {technologies.map((stack) => (
          <Stack key={stack.key} src={stack.src} alt={stack.alt} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
