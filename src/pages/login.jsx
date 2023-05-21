import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Route, Link, Routes, Navigate, useNavigate } from "react-router-dom";
import userData from "../database/users.json";
import { Button } from "../components/Button";
import { User } from "./user";
import { Admin } from "./admin";

const data = userData.users;
console.log("heeree", data);
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const RoleRoute = ({ role, roles = [], ...props }) => {
    return !roles.length || roles.includes(role) ? (
      <Route {...props} />
    ) : (
      <Link to=".." />
    );
  };

  const roles = ["user", "admin"];
  const [role, setRole] = useState(roles[0]);
  <>
    <Routes>
      <RoleRoute path="/" role={role} roles={["user"]} component={<User />} />
      <RoleRoute
        path="/admin"
        role={role}
        roles={["admin"]}
        component={<Admin />}
      />

      {/* <Route path="/" component={<User/>} />
        <Link to="/" /> */}
    </Routes>
  </>;
  const [loginHead, setLoginHead] = useState("Login");
  const [user, setUser] = useState("Admin");
  const changeHead = () => {
    if (user === "User") {
      setLoginHead("Login");
      setUser("Admin");
    } else {
      setLoginHead("Admin Login");
      setUser("User");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.username===username && data.password===password) {
      console.log("Login successful");
      navigate("/");
    } else {
      console.log("Invalid username or password");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login-head">
          <h1>{loginHead}</h1>
        </div>
        <div className="logintoggle">
          <span onClick={changeHead} className="username">
            {user}
          </span>
        </div>
        <div className="login-form" onChange={(e)=>setRole(e.target.value)}>
          <form onSubmit={handleSubmit}>
          <label>UserName</label>
          {/* <i><AccountCircleIcon/></i> */}
            <InputField
              name="username"
              placeholder="Type your username"
              type="text"
              onChange={handleUsernameChange}
              required
            />
            <label>Password</label>
            {/* <i><LockIcon/></i> */}
            <InputField
              name="password"
              placeholder="Type your password"
              type="password"
              onChange={handlePasswordChange}
              required
            />
            <Button name="Login" className="login-button" />
          </form>
        </div>
      </div>
    </div>
  );
};
