import React from "react";

export const Button = ({ type, name, handleClick, className }) => {
  return (
    <>
      <button type={type} onClick={handleClick} className={className}>
        {name}
      </button>
    </>
  );
};
