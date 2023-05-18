import React, { useState } from "react";
import { Button } from "../components/Button";
import { AccountCircleIcon } from "../assets/icons/icons";
import issueData from "../database/issues.json";
import { Link } from "react-router-dom";

import { UserProfile } from "../components/UserProfile";

const tableHead = [
  "S.N.",
  "Issue",
  "Field",
  "Start-Date",
  "End-Date",
  "Status",
  "Negotiation",
];
const data = issueData.issues;

export const User = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [isHovered,setIsHovered]=useState(false);

  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className="user">
      {/* ....top-navbar........ */}
      <div className="user__title">
        <h1>Issue Tracker</h1>
        <div className="user__name">
          <i onClick={() => setViewProfile(!viewProfile)}>
            {/* {viewProfile && <UserProfile/>} */}
            <AccountCircleIcon fontSize="large" />
          </i>
          <p>User_Name</p>
        </div>
      </div>
      {/* .....add issue button......... */}
      <div className="user__button">
        <Link to="/addissue">
          <Button className="addissue" name="Add Issue" />
        </Link>
        <Link to="/issueinfo">
          <Button className="addissue" name="Issue Info" />
        </Link>
      </div>
      {/* .....issue list in table........ */}
      <div className="user__table">
        {tableHead.map((item) => {
          return (
            <span key={item} className="table-title">
              {item}
            </span>
          );
        })}
        {/* ........issue list..... */}
        {data.map((item) => {
          return (
            <>
              <span>{item.id}</span>
              <span>{item.desc.slice(0, 50)}</span>
              <span>{item.field}</span>
              <span>{item.startingDate}</span>
              <span>{item.endingDate}</span>
              <span>{item.status}</span>
              {/* ....button for viewing...... */}
              <div className="negotiation-button">
                {item.feasible === "Yes" ? (
                  <Link to={`/viewPage/${item.id}`}>
                    <Button name="View" />
                  </Link>
                ) : (
                  <div className="hover-text">
                      <Button onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      name="Disabled"
                      className="button-disabled"
                      />
                      {isHovered && <span>Unable to view </span>}
                    </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
