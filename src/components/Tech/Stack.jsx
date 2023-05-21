import React from "react";

const Stack = (props) => {
  return (
    <div className="flex justify-around basis-1/6 p-5">
      <img
        src={props.src}
        alt={props.alt}
        className="w-24 h-24 flex flex-wrap flex-shrink"
      />
    </div>
  );
};

export default Stack;
