import React from "react";
import myProject from "./myProject";
import Live from "./Live";


const Project = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 pb-40">
      <div>
        <h1 className="text-4xl font-bold text-center text-blue-500">
          Projects
        </h1>
        <p className="text-center py-8">
          Things I’ve built so far
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12">{myProject.map(card => (
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
