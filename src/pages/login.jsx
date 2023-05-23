import React, { useState, createContext } from "react";
import { InputField } from "../components/InputField";
import { Route, Link, useNavigate } from "react-router-dom";
import userData from "../database/users.json";
import PropTypes from "prop-types";
import { Button } from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useToken from "../service/useToken";
const data = userData.users;

async function LoginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export const Login = () => {
  const { token, setToken } = useToken();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const roles = ["user", "admin"];
  const [role, setRole] = useState(roles[0]);
  const navigate = useNavigate();
   const notifyError = () => {
    toast.error("OOPPSS!!! Wrong credentials", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [loginHead, setLoginHead] = useState("Login");
  const [user, setUser] = useState("Admin");
  // const changeHead = () => {
  //   if (user === "User") {
  //     setLoginHead("Login");
  //     setUser("Admin");
  //   } else {
  //     setLoginHead("Admin Login");
  //     setUser("User");
  //   }
  // };
  const result = data.filter((item) => {
    return item.username === username && item.password === password;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (result.length !== 0 && result[0].role === "user") {
      const token = await LoginUser({
        username,
        password,
      });
      setToken(token);
      navigate(`/user/${result[0].id}`);
      window.location.reload();
    } else {
      notifyError();
      console.log("sorry no token");
    }
  };
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
              handleInput={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            {/* <i><LockIcon/></i> */}
            <InputField
              name="password"
              placeholder="Type your password"
              type="password"
              handleInput={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" name="Login" className="login-button" />
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
Login.propTypes = {
  settoken: PropTypes.func.isRequired,
};
