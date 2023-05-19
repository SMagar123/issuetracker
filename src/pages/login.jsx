import React, { useState } from "react";
import { InputField } from "../components/InputField";
import {Route, Link} from 'react-router-dom';
import {userData} from "../database/users.json";
import {adminData} from "../database/admin.json";
import { Button } from "../components/Button";

// const userLogin=userData.user;
// console.log(userData.user);
// const adminLogin=adminData.admin;
export const Login = () => {
  const RoleRoute = ({ role, roles = [], ...props }) => {
    return !roles.length || roles.includes(role) ? (
      <Route {...props} />
    ) : (
      <Link to=".." />
    );
  };

  const roles = ["user", "admin"];

  const [role, setRole] = useState(roles[0]);
  const [loginHead, setLoginHead]= useState("Login");
  const [user,setUser]= useState("Admin");
  const changeHead=()=>{
    // setLoginHead("Admin Login");
    if(user==="User"){
      setLoginHead("Login");
      setUser("Admin");
    }else{
      setLoginHead("Admin Login");
      setUser("User");
    }
    }

  return (
    <div className="login">
    <div className="login__wrapper">
      <div className="login-head">
        <h1>{loginHead}</h1>
      </div>
      <div className="logintoggle">       
          <span onClick={changeHead} className="username">         
          {user}</span>
          </div>
      <div className="login-form">
        <label>UserName</label>
        {/* <i><AccountCircleIcon/></i> */}
        <InputField
          name="username"
          placeholder="Type your username"
          type="text" required
        />
        <label>Password</label>
        {/* <i><LockIcon/></i> */}
        <InputField
          name="password"
          placeholder="Type your password"
          type="password" required
        />
           
        <Button name="Login" className="login-button"/>
      </div>
    </div>
    </div>
  );
};
