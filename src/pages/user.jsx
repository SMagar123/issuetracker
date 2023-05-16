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
  return (
    <div className="user">
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
      <div className="user__button">
        <Link to="/addissue">
          <Button className={"addissue"} name="Add Issue" />
        </Link>
      </div>
      <div className="user__table">
        {tableHead.map((item) => {
          return (
            <span key={item} className="table-title">
              {item}
            </span>
          );
        })}
        {data.map((item) => {
          return (
            <>
              <span>{item.id}</span>
              <span>{item.desc.slice(0, 50)}</span>
              <span>{item.field}</span>
              <span>{item.startingDate}</span>
              <span>{item.endingDate}</span>
              <span>{item.status}</span>
              <div className="negotiation-button">
                {item.feasible === "Yes" ? (
                  <Link to={`/viewPage/${item.id}`}>
                    <Button name="View" />
                  </Link>
                ) : (
                  <Button name="Disabled" disabled />
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
