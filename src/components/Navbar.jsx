import React from "react";
import { AccountCircleIcon } from "../assets/icons/icons";
import { Button } from "./Button";
export const Navbar = () => {
  return (
    <>
      <div className="hero__admindetails">
        <div className="project-title">
          <h2>Issue Tracker</h2>
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
