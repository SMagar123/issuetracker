import React, { useState, useContext, useEffect } from "react";
import { IssueList } from "../components/IssueList";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import { Navbar } from "../components";
const issueTypes = ["New", "Pending", "Solved", "Reject"];
export const AdminHeropage = () => {
  const navigate = useNavigate();
  const { tokenString } = useContext(LoginContext);
  const [issueType, setIssueType] = useState("New");
  const userRole = sessionStorage.getItem("role");
  const handleTypes = (e) => {
    setIssueType(e.target.getAttribute("value"));
  };
  useEffect(() => {
    if (!tokenString || userRole !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="heropage">
        <div className="hero__issuedisplay">
          <h2>Feature Request List</h2>
          {/* <nav>
          <ul>
            {issueTypes.map((item) => {
              return (
                <li key={item}>
                  <NavLink
                    
                    key={item}
                    value={item}
                    onClick={handleTypes}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav> */}
        </div>
        <div className="hero__issuelist">
          <IssueList issueType={issueType} />
        </div>
      </div>
    </>
  );
};
