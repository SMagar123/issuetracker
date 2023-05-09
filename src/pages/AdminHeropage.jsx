import React, { useState } from "react";
import { IssueList } from "../components/IssueList";
const issueTypes = ["New", "Pending", "Solved", "Reject"];
export const AdminHeropage = () => {
  const [issueType, setIssueType] = useState("New");
  const handleTypes = (e) => {
    setIssueType(e.target.getAttribute("value"));
  };
  return (
    <div className="heropage">
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
