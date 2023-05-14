import React from "react";

export const Button = ({ type, name, handleClick, className, disabled, value}) => {
  return (
    <>
      <button type={type} onClick={handleClick} className={className} value={value} disabled={disabled}>
        {name}
      </button>
    </>
  );
};
