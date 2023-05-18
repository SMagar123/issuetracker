import React from "react";

export const Button = ({ type, name, handleClick, className, disabled, value, onMouseEnter, onMouseLeave}) => {
  return (
    <>
      <button type={type} onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className} value={value} disabled={disabled}>
        {name}
      </button>
    </>
  );
};
