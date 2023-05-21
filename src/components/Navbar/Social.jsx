import React from "react";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <div className="social flex justify-end basis-1/3 items-center">
      <SocialIcon
        className="m-2"
        style={{ height: 40, width: 40 }}
        url="#"
        network="github"
      />
      <SocialIcon
        className="m-2"
        style={{ height: 40, width: 40 }}
        url="#"
        network="twitter"
      />
      <SocialIcon
        className="m-2"
        style={{ height: 40, width: 40 }}
        url="#"
        network="linkedin"
      />
    </div>
  );
};

export default Social;
