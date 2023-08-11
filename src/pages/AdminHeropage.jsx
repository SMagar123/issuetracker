import React, { useState, useContext, useEffect } from "react";
import { IssueList } from "../components/IssueList";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import { Navbar } from "../components";
const issueTypes = ["New", "Pending", "Solved", "Reject"];
export const AdminHeropage = ({ getSelectedField }) => {
  const navigate = useNavigate();
  const { tokenString, selectField } = useContext(LoginContext);
  const [issueType, setIssueType] = useState("New");
  const [userSelectField, setUserSelectField] = useState();
  const userRole = sessionStorage.getItem("role");
  const handleTypes = (e) => {
    setIssueType(e.target.getAttribute("value"));
  };
  useEffect(() => {
    if (!tokenString || userRole !== "admin") {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    getSelectedField(userSelectField);
  }, [userSelectField]);
  useEffect(() => {
    document.title = "Admin | NTS"; // Change 'New Page Title' to your desired title
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
          <IssueList selectField={setUserSelectField} issueType={issueType} />
        </div>
      </div>
    </>
  );
};
