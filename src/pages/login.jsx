import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Route, Link, useNavigate } from "react-router-dom";
import userData from "../database/users.json";
import { Button } from "../components/Button";


const data = userData.users;
// console.log("heeree", data);
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    {/* <Routes>
      <RoleRoute path="/" role={role} roles={["user"]} component={<User />} />
      <RoleRoute
        path="/admin"
        role={role}
        roles={["admin"]}
        component={<Admin />}      />

     
    </Routes> */}
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
    console.log(username);
    console.log(password);
    const result = data.filter((item) => {
      return item.username === username && item.password === password;
    });
    // console.log(result);
    if (result.length !== 0 && result[0].role === "admin") {
      navigate("/admin");
    }
    if (result.length !== 0 && result[0].role === "user") {
      navigate(`/user/${result[0].id}`);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login-head">
          <h1>{loginHead}</h1>
        </div>
        {/* <div className="logintoggle">
          <span onClick={changeHead} className="username">
            {user}
          </span>
        </div> */}
        <div className="login-form" onChange={(e) => setRole(e.target.value)}>
          <form onSubmit={handleSubmit}>
            <label>UserName</label>
            {/* <i><AccountCircleIcon/></i> */}
            <InputField
              name="username"
              placeholder="Type your username"
              type="text"
              handleInput={(e) => handleUsernameChange(e)}
              required
            />
            <label>Password</label>
            {/* <i><LockIcon/></i> */}
            <InputField
              name="password"
              placeholder="Type your password"
              type="password"
              handleInput={(e) => handlePasswordChange(e)}
              required
            />
            <Button name="Login" className="login-button" />
          </form>
        </div>
      </div>
    </div>
  );
};
