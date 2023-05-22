import React from "react";

const Phone = (props) => {
  return (
    <div>
      <a href={props.href}>{props.text}</a>
    </div>
  );
};

export default Phone;
