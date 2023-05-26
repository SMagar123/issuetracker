import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import userData from "../database/users.json";
import PropTypes from "prop-types";
import { Button } from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "../service/useToken";
import useRole from "../service/useRole";
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
async function LoginAdmin(credentials) {
  return fetch("http://localhost:8080/login-admin", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export const Login = ({ user }) => {
  const { token, setToken } = useToken();
  const { role, setRole } = useRole();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
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
      user(result[0].role);
      // setRole(result[0].role);
      navigate(`/user/${result[0].id}`);
      // window.location.reload();
    } else if (result.length !== 0 && result[0].role === "admin") {
      const token = await LoginAdmin({
        username,
        password,
      });
      setToken(token);
      user(result[0].role);
      // setRole(result[0].role);
      navigate(`/admin`);
      // window.location.reload();
    } else {
      notifyError();
      console.log("sorry no token");
    }
  };
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login-head">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <InputField
              name="username"
              placeholder="Type your username"
              type="text"
              label="Username"
              handleInput={(e) => setUsername(e.target.value)}
              required
            />

            <InputField
              name="password"
              placeholder="Type your password"
              type="password"
              label="Password"
              handleInput={(e) => setPassword(e.target.value)}
              required
            />
            <p>
              Don't have an account? <Link to="/register"> Register Here</Link>
            </p>
            <Button type="submit" name="Login" className="login-button" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
Login.propTypes = {
  settoken: PropTypes.func.isRequired,
  setRole: PropTypes.func.isRequired,
};
