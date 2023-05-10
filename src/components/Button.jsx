import React from "react";

export const Button = ({ type, name, handleClick, className, disabled}) => {
  return (
    <>
      <button type={type} onClick={handleClick} className={className} disabled={disabled}>
        {name}
      </button>
    </>
  );
};
