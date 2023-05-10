import React, { useEffect, useState } from "react";
import { getSingleIssue } from "../service/api";

export const DisplayDescription = ({ user_id }) => {
  const [issueDesc, setIssueDesc] = useState();
  const getIssueDescriptionofUser = async () => {
    let response = await getSingleIssue(user_id);
    setIssueDesc(response.data);
  };
  useEffect(() => {
    getIssueDescriptionofUser();
  }, [user_id]);

  console.log(issueDesc);
  console.log(user_id);
  return (
    <>
      {issueDesc === undefined ? (
        ""
      ) : (
        <div className="descripton-model">
          <p>{issueDesc.desc}</p>
        </div>
      )}
    </>
  );
};
