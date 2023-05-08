import React from "react";
import issueData from "../database/issues.json";
const issueInfoTitle = [
  "User_id",
  "Issue",
  "Field",
  "Starting Date",
  "Solved Date",
  "Status",
  "Solvabale",
  "Negotiation",
];
const issueDataList = issueData.issues;
console.log(issueDataList);
export const IssueList = ({ issueType }) => {
  console.log(issueType);
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
        {issueDataList
          .filter((item) => item.status === `${issueType}`)
          .map((item) => {
            return (
              <>
                <span>{item.source.id}</span>
                <span>{item.desc.slice(0, 20)}</span>
                <span>{item.field}</span>
                <span>{item.startingDate}</span>
                <span>{item.endingDate}</span>
                <span>{item.status}</span>
                <span>{item.solvable}</span>
                <span>{item.negotiable["solved date"]}</span>
              </>
            );
          })}
      </div>
    </div>
  );
};
