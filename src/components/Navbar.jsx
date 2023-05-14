import React from "react";
import { AccountCircleIcon } from "../assets/icons/icons";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
export const Navbar = () => {
  return (
    <>
      <div className="hero__admindetails">
        <div className="project-title">
          <NavLink to="/">
            <h2>Issue Tracker</h2>
          </NavLink>
        </div>
        <div className="admin">
          <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
          <p>Suraj-Magar</p>
          <div className="admin-edit">
            <Button name="Profile" />
            <Button name="Logout" />
          </div>
        </div>
      </div>
    </>
  );
};
