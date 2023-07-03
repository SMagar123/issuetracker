// import React, { useState } from "react";
// import issueData from "../database/issues.json";
// import featureData from "../database/practice.json";
// import { Button } from "./Button";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   VisibilityIcon,
//   VisibilityOffIcon,
//   CloseIcon,
// } from "../assets/icons/icons";
// import { DisplayDescription } from "./DisplayDescription";

// const issueInfoTitle = [
//   "User_id",
//   "Field",
//   "Registered Date",
//   "Solved Date",
//   "Status",
//   "Requirement",
//   "Feasible",
// ];
// const issueDataList = featureData.issues;
// export const IssueList = ({ issueType }) => {
//   const [user_id, setUserId] = useState();
//   const [viewDetails, setViewDetails] = useState(false);
//   const displayDetails = (received_id) => {
//     setUserId(received_id);
//     setViewDetails(!viewDetails);
//   };
//   // console.log(
//   //   featureData.issues?.forEach((item) => {
//   //     console.log(item.details?.filter((item) => item.status === "New"));
//   //   })
//   // );
//   console.log(
//     featureData.issues
//       .map((item) => item.details)
//       .flatMap((item) => item.map((object) => object))
//       .filter((item) => item.status === "New")
//   );
//   return (
//     <>
//       <div className="issueList">
//         <div className="status-new">
//           <h4>New</h4>
//           {featureData.issues
//             .map((item) => item.details)
//             .flatMap((item) => item.map((object) => object))
//             .filter((item) => item.status === "New")
//             .map((item) => {
//               return (
//                 <div className="individualIssue">
//                   <h5>{item.field}</h5>
//                   <p>{item.desc?.slice(0, 120)}</p>
//                   <i>
//                     <VisibilityOffIcon fontSize="small" className="off-icon" />
//                     <VisibilityIcon
//                       fontSize="small"
//                       className="on-icon"
//                       onClick={() => displayDetails(`${item.id}`)}
//                     />
//                   </i>
//                 </div>
//               );
//             })}
//         </div>

//         <div className="status-pending">
//           <h4>Pending</h4>
//           {featureData.issues
//             .map((item) => item.details)
//             .flatMap((item) => item.map((object) => object))
//             .filter((item) => item.status === "Pending")
//             .map((item) => {
//               return (
//                 <div className="individualIssue">
//                   <h5>{item.field}</h5>
//                   <p>{item.desc?.slice(0, 120)}</p>
//                   <i>
//                     <VisibilityOffIcon fontSize="small" className="off-icon" />
//                     <VisibilityIcon
//                       fontSize="small"
//                       className="on-icon"
//                       onClick={() => displayDetails(`${item.id}`)}
//                     />
//                   </i>
//                 </div>
//               );
//             })}
//         </div>

//         <div className="status-solved">
//           <h4>Solved</h4>
//           {featureData.issues
//             .map((item) => item.details)
//             .flatMap((item) => item.map((object) => object))
//             .filter((item) => item.status === "Solved")
//             .map((item) => {
//               return (
//                 <div className="individualIssue">
//                   <h5>{item.field}</h5>
//                   <p>{item.desc?.slice(0, 120)}</p>
//                   <i>
//                     <VisibilityOffIcon fontSize="small" className="off-icon" />
//                     <VisibilityIcon
//                       fontSize="small"
//                       className="on-icon"
//                       onClick={() => displayDetails(`${item.id}`)}
//                     />
//                   </i>
//                 </div>
//               );
//             })}
//         </div>

//         <div className="status-reject">
//           <h4>Rejected</h4>
//           {featureData.issues
//             .map((item) => item.details)
//             .flatMap((item) => item.map((object) => object))
//             .filter((item) => item.status === "Rejected")
//             .map((item) => {
//               return (
//                 <div className="individualIssue">
//                   <h5>{item.field}</h5>
//                   <p>{item.desc?.slice(0, 120)}</p>
//                   <i>
//                     <VisibilityOffIcon fontSize="small" className="off-icon" />
//                     <VisibilityIcon
//                       fontSize="small"
//                       className="on-icon"
//                       onClick={() => displayDetails(`${item.id}`)}
//                     />
//                   </i>
//                 </div>
//               );
//             })}
//         </div>
//         {viewDetails ? (
//           <div className="viewDetails">
//             <CloseIcon
//               fontSize="large"
//               onClick={() => setViewDetails(!viewDetails)}
//             />
//             <DisplayDescription user_id={user_id} />
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </>
//   );
// };

import React from 'react';

const YourComponent = () => {
  const jsonObject = {
    "issues": [
      // ... JSON data ...
    ]
  };

  const issues = jsonObject.issues;

  const renderIssuesByStatus = (status) => {
    const filteredIssues = issues.filter(issueGroup => {
      return issueGroup.details.some(issue => issue.status === status);
    });

    if (filteredIssues.length === 0) {
      return <p>No issues with status "{status}" found.</p>;
    }

    return (
      <div>
        <h2>Issues with Status "{status}":</h2>
        {filteredIssues.map(issueGroup => (
          <div key={issueGroup.id}>
            <h3>Issue Group ID: {issueGroup.id}</h3>
            {issueGroup.details
              .filter(issue => issue.status === status)
              .map((issue, index) => (
                <div key={index}>
                  <p>Description: {issue.desc}</p>
                  <p>Field: {issue.field}</p>
                  <p>Starting Date: {issue.startingDate}</p>
                  {/* Display other issue details */}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderIssuesByStatus("New")}
      {renderIssuesByStatus("Pending")}
      {renderIssuesByStatus("Solved")}
      {renderIssuesByStatus("Rejected")}
    </div>
  );
};

export default YourComponent;
