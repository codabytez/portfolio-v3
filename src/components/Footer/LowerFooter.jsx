import React from "react";
import Links from "../Navbar/Links";

const LowerFooter = () => {
  return (
    <div className="flex justify-between items-center mt-5 my-3 mx-3 mb-5 px-8">
      <div className="flex w-[calc(50%)]">
        <Links />
      </div>
      <div>
        <h3 className="flex items-center">
          <span className="flex items-center">
            Built with ❤️ by
            <a
              href="#"
              className="flex items-center pl-2 hover:underline decoration-red-300 transition-all ease-in-out duration-500"
            >
              <span className="name flex items-center">Obinna Chidi</span>
            </a>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default LowerFooter;
