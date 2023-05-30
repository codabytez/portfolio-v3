import React from "react";

const LowerFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-5 my-3 mb-5">

      <div>
        <h3 className="flex items-center mt-4">
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
      <div className="flex">
        <div className="flex justify-center text-gray-400 italic font-extrabold">
          <p>Copyright © {new Date().getFullYear()} </p>
        </div>
      </div>
    </div>


  );
};

export default LowerFooter;
