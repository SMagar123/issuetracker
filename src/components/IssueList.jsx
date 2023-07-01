import React, { useState } from "react";
import issueData from "../database/issues.json";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import {
  VisibilityIcon,
  VisibilityOffIcon,
  CloseIcon,
} from "../assets/icons/icons";
import { DisplayDescription } from "./DisplayDescription";

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
  const [user_id, setUserId] = useState();
  const [viewDetails, setViewDetails] = useState(false);
  const displayDetails = (received_id) => {
    setUserId(received_id);
    setViewDetails(!viewDetails);
  };

  return (
    // <div className="issuelist">
    //   <div className="issuelist__display">
    //     {issueInfoTitle.map((item) => {
    //       return (
    //         <span key={item}>
    //           <strong>{item}</strong>
    //         </span>
    //       );
    //     })}
    //     {issueDataList.filter((item) => item.status === `${issueType}`)
    //       .length === 0
    //       ? "No results found !!!"
    //       : issueDataList
    //           .filter((item) => item.status === `${issueType}`)
    //           .map((item) => {
    //             return (
    //               <>
    //                 <span>{item.id}</span>
    //                 <span>{item.field}</span>
    //                 <span>{item.startingDate}</span>
    //                 <span>{item.endingDate}</span>
    //                 <div className="status">
    //                   {item.status === "New" ? (
    //                     <span className="status-new">{item.status}</span>
    //                   ) : item.status === "Pending" ? (
    //                     <span className="status-pending">{item.status}</span>
    //                   ) : item.status === "Solved" ? (
    //                     <span className="status-solved">{item.status}</span>
    //                   ) : (
    //                     <span className="status-reject">{item.status}</span>
    //                   )}
    //                 </div>

    //                 <div className="view-button">
    //                   <Link to={`/requirement/${item.id}`}>
    //                     <button>View</button>
    //                   </Link>
    //                 </div>

    //                 {item.status === "Solved" || item.status === "Reject" ? (
    //                   <div className="feasible">
    //                     <h4>Done it</h4>
    //                   </div>
    //                 ) : `${item.status}` === "Pending" ? (
    //                   <div className="feasible">
    //                     <Link to={`/completion-form/${item.id}`}>
    //                       <Button name="Yes" />
    //                     </Link>
    //                     <Link to={`/cannot-resolve/${item.id}`}>
    //                       <Button name="No" />
    //                     </Link>
    //                   </div>
    //                 ) : (
    //                   <div className="feasible">
    //                     <Link to={`/negotiate-form/${item.id}`}>
    //                       <Button name="Yes" />
    //                     </Link>
    //                     <Link to={`/cannot-resolve/${item.id}`}>
    //                       <Button name="No" />
    //                     </Link>
    //                   </div>
    //                 )}
    //               </>
    //             );
    //           })}
    //   </div>
    //   {/* <DisplayDescription user_id={viewDescription} /> */}
    // </div>
    <>
      {/* <div className="issueList">
        <div className="status-new">
          <h4>New</h4>
          {issueDataList
            .filter((item) => {
              return item.status === "New";
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-pending">
          <h4>Pending</h4>
          {issueDataList
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-solved">
          <h4>Solved</h4>
          {issueDataList
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-reject">
          <h4>Rejected</h4>
          {issueDataList
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
                      onClick={() => displayDetails(`${item.id}`)}
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
            <DisplayDescription user_id={user_id} />
          </div>
        ) : (
          ""
        )}
      </div> */}
      <div className="issueList">
        <div className="status-new">
          <h4>New</h4>
          {issueDataList
            .filter((item) => {
              return item.status === "New";
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-pending">
          <h4>Pending</h4>
          {issueDataList
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-solved">
          <h4>Solved</h4>
          {issueDataList
            // .filter((item) => {
            //   return item.details.filter((items) => {
            //     return items.status === "Solved";
            //   });
            // })
            .filter((item) => {
              return item.status === "New";
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
                      onClick={() => displayDetails(`${item.id}`)}
                    />
                  </i>
                </div>
              );
            })}
        </div>

        <div className="status-reject">
          <h4>Rejected</h4>
          {issueDataList
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
                      onClick={() => displayDetails(`${item.id}`)}
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
            <DisplayDescription user_id={user_id} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
