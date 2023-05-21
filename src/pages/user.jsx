import React, { useState } from "react";
import { Button } from "../components/Button";
import { AccountCircleIcon } from "../assets/icons/icons";
import issueData from "../database/issues.json";
import { Link, useNavigation, useParams } from "react-router-dom";
import Data from "../database/users.json";
import { createPortal } from "react-dom";
import { ViewNegotiable } from "./viewnegotiable";

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
const userData = Data.user;
export const User = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  // const navigation = useNavigation();
  return (
    <>
      {/* ....top-navbar........ */}
      <div className="user__title">
        <h1>Issue Tracker</h1>
        <div className="user-nav">
          <span>
            <Link to="/addissue">Add Issue</Link>
          </span>
          <span>
            <Link to="/issueinfo">Issue Info</Link>
          </span>
        </div>
        <div className="user__name">
          <i onClick={() => setViewProfile(!viewProfile)}>
            <Link to="/login">{viewProfile && <span>Log Out</span>}</Link>
            <AccountCircleIcon fontSize="large" />
          </i>
          <p>User_Name</p>
        </div>
      </div>
      <div className="user">
        <h1>Negotiation List</h1>

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
                    // <Link to={`/${item.id}`}>
                    <Button name="View" onClick={() => setShowModal(true)}>
                      {showModal &&
                        createPortal(
                          <ViewNegotiable onClose={() => setShowModal(false)} />
                        )}
                    </Button>
                  ) : (
                    //  </Link>
                    <div className="hover-text">
                      <Button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        name="On Process"
                        className="button-disabled"
                      />
                      {isHovered && <span>Will be activated soon </span>}
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
