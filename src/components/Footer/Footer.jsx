import React from "react";


const Footer = () => {
  return (
    <div id="footer" className="max-w-[1400px] min-w-[300px] pt-12 m-auto md:pl-20 md:pr-10 pb-1 border-t-[3px] border-stone-400 bg-light dark:bg-dark">
      <div className="flex flex-col md:flex-row justify-around items-center mb-5">


        <p className="flex items-start mb-2 text-base text-content dark:text-darkContent">
          Built with ❤️ by
          <a
            href=""
            className="flex items-center pl-2 hover:underline decoration-red-300 transition-all ease-in-out duration-500"
          >
            <span className="name flex items-center">Obinna Chidi</span>
          </a>
        </p>
        <div className="flex">
          <div className="flex justify-center text-content text-base pr-6 dark:text-darkContent">
            <p>Copyright © {new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
