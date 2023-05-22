import React from "react";
import reactLogo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <a href="https://flowbite.com/" class="flex items-center">
      <img src={reactLogo} className="h-14 w-32" alt="React logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </a>
  );
};

export default Logo;
