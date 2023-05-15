import React, { useState } from "react";
import issueData from "../database/issues.json";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

const issueInfoTitle = [
  "User_id",
  "Field",
  "Registered Date",
  "Solved Date",
  "Status",
  "Requirement",
  "Feasible",
];
const issueDataList = issueData.issues;
export const IssueList = ({ issueType }) => {
  return (
    <div className="issuelist">
      <div className="issuelist__display">
        {issueInfoTitle.map((item) => {
          return (
            <span key={item}>
              <strong>{item}</strong>
            </span>
          );
        })}
        {issueDataList.filter((item) => item.status === `${issueType}`)
          .length === 0
          ? "No results found !!!"
          : issueDataList
              .filter((item) => item.status === `${issueType}`)
              .map((item) => {
                return (
                  <>
                    <span>{item.id}</span>
                    <span>{item.field}</span>
                    <span>{item.startingDate}</span>
                    <span>{item.endingDate}</span>
                    <div className="status">
                      {item.status === "New" ? (
                        <span className="status-new">{item.status}</span>
                      ) : item.status === "Pending" ? (
                        <span className="status-pending">{item.status}</span>
                      ) : item.status === "Solved" ? (
                        <span className="status-solved">{item.status}</span>
                      ) : (
                        <span className="status-reject">{item.status}</span>
                      )}
                    </div>

                    <div className="view-button">
                      <Link to={`/requirement/${item.id}`}>
                        <button>View</button>
                      </Link>
                    </div>

                    {item.status === "Solved" || item.status === "Reject" ? (
                      <div className="feasible">
                        <h4>Done it</h4>
                      </div>
                    ) : `${item.status}` === "Pending" ? (
                      <div className="feasible">
                        <Link to={`/completion-form/${item.id}`}>
                          <Button name="Yes" />
                        </Link>
                        <Link to={`/cannot-resolve/${item.id}`}>
                          <Button name="No" />
                        </Link>
                      </div>
                    ) : (
                      <div className="feasible">
                        <Link to={`/negotiate-form/${item.id}`}>
                          <Button name="Yes" />
                        </Link>
                        <Link to={`/cannot-resolve/${item.id}`}>
                          <Button name="No" />
                        </Link>
                      </div>
                    )}
                  </>
                );
              })}
      </div>
      {/* <DisplayDescription user_id={viewDescription} /> */}
    </div>
  );
};
