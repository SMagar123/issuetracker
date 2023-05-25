import React from "react";

export const InputField = ({
  type,
  name,
  value,
  handleInput,
  label,
  required,
  className,
   disabled,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInput}
        required={required}
        placeholder={`Enter ${label}`}
        className={className}
        disabled={disabled}
      />

    </>
  );
};
