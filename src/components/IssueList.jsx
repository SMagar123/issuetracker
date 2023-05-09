import React, { useState } from "react";
import issueData from "../database/issues.json";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
const issueInfoTitle = [
  "User_id",
  "Issue",
  "Field",
  "Starting Date",
  "Solved Date",
  "Status",
  "Feasible",
];
const issueDataList = issueData.issues;
export const IssueList = ({ issueType }) => {
  const navigate = useNavigate();
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
                    <span>{item.desc.slice(0, 20)}</span>
                    <span>{item.field}</span>
                    <span>{item.startingDate}</span>
                    <span>{item.endingDate}</span>
                    <span>{item.status}</span>

                    {item.status === "Solved" || item.status === "Reject" ? (
                      <div className="feasible">
                        <h4>Done it</h4>
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
    </div>
  );
};
