import React from "react";
import Navbar from "./Navbar";

var menu = document.querySelector("#menu");
var burger = document.querySelector("#burger");

menu.addEventListener("click", () => {
  if (burger.classList.contains("hidden")) {
    burger.classList.remove("hidden");
  } else {
    burger.classList.add("hidden");
  }
});

const Links = () => {
  return (
    <div
      class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 relative z-50"
      id="burger"
    >
      <ul class="flex flex-col border-green-200 p-4 md:p-0 mt-4 font-medium border-2 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 fixed md:relative top-0 left-0 w-screen">
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
