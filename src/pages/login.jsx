import React from "react";
import { InputField } from "../components/InputField";
import { AccountCircleIcon, LockIcon } from "../assets/icons/icons";

import { Button } from "../components/Button";

export const Login = () => {
  return (
    <div className="login">
    <div className="login__wrapper">
      <div className="login-head">
        <h1>Login</h1>
      </div>
      <div className="login-form">
        <label>UserName</label>
        {/* <i><AccountCircleIcon/></i> */}
        <InputField
          name="username"
          placeholder="Type your username"
          type="text"
        />
        <label>Password</label>
        {/* <i><LockIcon/></i> */}
        <InputField
          name="password"
          placeholder="Type your password"
          type="password"
        />
        <p>Forget Password?</p>
        <Button name="Login" className="login-button"/>
      </div>
    </div>
    </div>
  );
};
