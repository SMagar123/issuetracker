import React, { createContext, useState } from "react";
import issueData from "../database/issues.json";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import {
  VisibilityIcon,
  VisibilityOffIcon,
  CloseIcon,
} from "../assets/icons/icons";
import { DisplayDescription } from "./DisplayDescription";
import multipleUserData from "../database/practice.json";
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
const multipleIssueDataList = multipleUserData.issues;
const FieldContext = createContext();
export const IssueList = ({ issueType, selectField }) => {
  const [user_id, setUserId] = useState();
  const [selectedField, setSelectedField] = useState();
  const [viewDetails, setViewDetails] = useState(false);
  const displayDetails = (received_field) => {
    const withoutFlatData = multipleIssueDataList.map((item) => item.details);
    const userIndex = withoutFlatData.findIndex(
      (
        item //obtains the index of the object in array
      ) => item.some((obj) => obj.field === received_field)
    );
    const userId = multipleIssueDataList[userIndex]?.id;
    setUserId(userId);
    setViewDetails(!viewDetails);
    setSelectedField(received_field);
    selectField(received_field);
  };

  const userData = multipleIssueDataList
    .map((item) => item.details)
    .flatMap((item) => item);

  return (
    <>
      <div className="issueList">
        <div className="status-new">
          <h4>New</h4>
          {userData
            .filter((item) => {
              return item?.status === "New";
            })
            .map((item) => {
              return (
                <div className="individualIssue">
                  <h5>{item?.field}</h5>
                  <p>{item?.desc.slice(0, 120)}</p>
                  <i>
                    <VisibilityOffIcon fontSize="small" className="off-icon" />
                    <VisibilityIcon
                      fontSize="small"
                      className="on-icon"
                      onClick={() => displayDetails(`${item?.field}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-pending">
          <h4>Pending</h4>
          {userData
            .filter((item) => {
              return item.status === "Pending";
            })
            .map((item) => {
              return (
                <div className="individualIssue">
                  <h5>{item.field}</h5>
                  <p>{item.desc.slice(0, 120)}</p>
                  <i>
                    <VisibilityOffIcon fontSize="small" className="off-icon" />
                    <VisibilityIcon
                      fontSize="small"
                      className="on-icon"
                      onClick={() => displayDetails(`${item.field}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-solved">
          <h4>Solved</h4>
          {userData
            // .filter((item) => {
            //   return item.details.filter((items) => {
            //     return items.status === "Solved";
            //   });
            // })
            .filter((item) => {
              return item.status === "Solved";
            })
            .map((item) => {
              return (
                <div className="individualIssue">
                  <h5>{item.field}</h5>
                  <p>{item.desc.slice(0, 120)}</p>
                  <i>
                    <VisibilityOffIcon fontSize="small" className="off-icon" />
                    <VisibilityIcon
                      fontSize="small"
                      className="on-icon"
                      onClick={() => displayDetails(`${item.field}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-reject">
          <h4>Rejected</h4>
          {userData
            .filter((item) => {
              return item.status === "Rejected";
            })
            .map((item) => {
              return (
                <div className="individualIssue">
                  <h5>{item.field}</h5>
                  <p>{item.desc.slice(0, 120)}</p>
                  <i>
                    <VisibilityOffIcon fontSize="small" className="off-icon" />
                    <VisibilityIcon
                      fontSize="small"
                      className="on-icon"
                      onClick={() => displayDetails(`${item.field}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>
        {viewDetails ? (
          <div className="viewDetails">
            <CloseIcon
              fontSize="large"
              onClick={() => setViewDetails(!viewDetails)}
            />

            <DisplayDescription
              selectedField={selectedField}
              user_id={user_id}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
