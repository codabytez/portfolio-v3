import React from "react";


const Links = () => {
  return (
    <div>
      <ul className="h-[calc(100vh)] md:h-auto justify-center items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="mb-10 md:mb-0 text-3xl md:text-lg block p-2 mr-1 active:text-white active:bg-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 ease-in md:bg-transparent md:dark:text-blue-500 text-gray-900 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
        </li>
        <li>
          <a href="#" className="mb-10 md:mb-0 text-3xl md:text-lg block p-2 mr-1 active:text-white active:bg-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 ease-in md:bg-transparent md:dark:text-blue-500 text-gray-900 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="mb-10 md:mb-0 text-3xl md:text-lg block p-2 mr-1 active:text-white active:bg-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 ease-in md:bg-transparent md:dark:text-blue-500 text-gray-900 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="mb-10 md:mb-0 text-3xl md:text-lg block p-2 mr-1 active:text-white active:bg-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 ease-in md:bg-transparent md:dark:text-blue-500 text-gray-900 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
