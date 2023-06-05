import React from "react";
import myProject from "./myProject";
import Live from "./Live";


const Project = () => {
  return (
    <div id='project' className="max-w-[1400px] min-w-[300px] m-auto md:pl-20 md:pr-10 p-4 py-16 pb-40 bg-light dark:bg-dark border-t-4 border-content">
      <div className="px-10">
        <h1 className="text-5xl font-bold text-solid dark:text-darkSolid">
          Projects
        </h1>
        <p className="text-center py-4 pb-8 flex text-content font-semibold text-3xl dark:text-darkContent">
          Things I’ve built so far
        </p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 px-10">{myProject.map(card => (
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
      ))}
      </div>
    </div>
  );
};

export default Project;
