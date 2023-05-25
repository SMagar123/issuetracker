import React, { useState, useEffect } from "react";
import { Button, InputField } from "../components";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Register = (id) => {
  const users = {
    id: "",
    username: "",
    password: "",
    email: "",
    role: "user",
  };
  const navigate = useNavigate();
  const [userList, setUserList] = useState(users);
  const notify = () => {
    toast.error("You can login now!!!", {
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
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`http://127.0.0.1:3005/users`, userList);
      notify();
      navigate("/");
    };

    const handleInputUser = (e) => {
      setUserList({ ...userList, [e.target.name]: e.target.value });
    };

    return (
      <>
        <div className="register">
          <div className="register-head">
            <h1>Register</h1>
          </div>
          <div className="register-form">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <InputField
              name="name"
                placeholder="Enter your full-name"
                type="text"
                handleInput={(e) => handleInputUser(e)}
                required
              />
              <label>Username</label>
              <InputField
                name="username"
                placeholder="Enter your username"
                type="text" handleInput={(e) => handleInputUser(e)}
                required
              />
              <label>Password</label>
              <InputField
                name="password"
                placeholder="Enter password"
                type="password" handleInput={(e) => handleInputUser(e)}
                required
              />
              <label>Email</label>
              <InputField
                name="email"
                placeholder="Enter email"
                type="email" handleInput={(e) => handleInputUser(e)}
                required
              />
              <Button
                type="Submit"
                name="Register Now"
                className="register-button"
              />
            </form>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  
};
