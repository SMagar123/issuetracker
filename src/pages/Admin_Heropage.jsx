import React, { useState } from "react";
import { AccountCircleIcon, CloseIcon, MenuIcon } from "../assets/icons/icons";
import { Button } from "../components/Button";
import { IssueList } from "../components/IssueList";
const issueTypes = ["New", "Pending", "Solved", "Rejected"];
export const Admin_Heropage = () => {
  const [issueType, setIssueType] = useState("New");
  const handleTypes = (e) => {
    setIssueType(e.target.getAttribute("value"));
  };
  return (
    <div className="heropage">
      <div className="hero__admindetails">
        <div className="project-title">
          <h2>Issue Tracker</h2>
        </div>

        <div className="admin">
          <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
          <p>Admin</p>
          <div className="admin-edit">
            <Button name="Profile" />
            <Button name="Logout" />
          </div>
        </div>
      </div>
      <div className="hero__issuedisplay">
        <h2>Issues List</h2>
        <nav>
          <ul>
            {issueTypes.map((item) => {
              return (
                <li key={item} value={item} onClick={handleTypes}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="hero__issuelist">
        <IssueList issueType={issueType} />
      </div>
    </div>
  );
};
