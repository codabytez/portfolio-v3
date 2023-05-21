import React from "react";

const Links = () => {
  return (
    <div className="link flex basis-2/3 items-center justify-evenly ">
      <ul className="flex justify-evenly basis-full text-xl">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Tech Stack</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
