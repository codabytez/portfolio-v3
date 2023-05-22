import React from "react";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <div className="social hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:flex md:order-2">
      <SocialIcon
        className="m-2"
        style={{ height: 30, width: 30 }}
        url="#"
        network="github"
      />
      <SocialIcon
        className="m-2"
        style={{ height: 30, width: 30 }}
        url="#"
        network="twitter"
      />
      <SocialIcon
        className="m-2"
        style={{ height: 30, width: 30 }}
        url="#"
        network="linkedin"
      />
    </div>
  );
};

export default Social;
