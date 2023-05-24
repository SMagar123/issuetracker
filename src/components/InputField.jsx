import React from "react";

export const InputField = ({ type, name, value, handleInput, label, disabled,placeholder,className}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={handleInput} disabled={disabled} placeholder={placeholder} className={className
      }/>
    </>
  );
};
