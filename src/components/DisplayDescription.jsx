import React, { useEffect, useState } from "react";
import { getSingleIssue } from "../service/api";
import { Link } from "react-router-dom";
import { Button } from "./Button";
export const DisplayDescription = ({ user_id }) => {
  const [issueDesc, setIssueDesc] = useState();
  const getIssueDescriptionofUser = async () => {
    let response = await getSingleIssue(user_id);
    setIssueDesc(response.data);
  };
  useEffect(() => {
    getIssueDescriptionofUser();
  }, [user_id]);
  return (
    <>
      {issueDesc === undefined ? (
        ""
      ) : (
        <div className="description-model">
          <div className="field">
            <h3>{issueDesc.field}</h3>
          </div>
          <div className="details">
            <div className="details-viewing">
              <div className="id">
                <label htmlFor="id">User_id</label>
                <h5>{issueDesc.id}</h5>
              </div>
              <div className="registeredDate">
                <label htmlFor="Registered Date">Registered Date</label>
                <h5>{issueDesc.startingDate}</h5>
              </div>
              <div className="solvedDate">
                <label htmlFor="Solved Date">Solved Date</label>
                {issueDesc.endingDate === "" ? (
                  <h5>----</h5>
                ) : (
                  <h5>{issueDesc.endingDate}</h5>
                )}
              </div>
              <div className="status">
                <label htmlFor="Status">Status</label>
                <h5>{issueDesc.status}</h5>
              </div>
            </div>
            <div className="details-handling">
              <div className="description">
                <label htmlFor="description">Description</label>
                <p>{issueDesc.desc}</p>
              </div>
              <div className="viewRequirements">
                <Link to={`/requirement/${issueDesc.id}`}>
                  <button>View Requirements</button>
                </Link>
              </div>
              <div className="feasible">
                <label htmlFor="feasible">Feasible</label>
                {/* <button>Yes</button>
                <button>No</button> */}
                {issueDesc.status === "Solved" ||
                issueDesc.status === "Rejected" ? (
                  <>
                    <h4>Done it</h4>
                  </>
                ) : `${issueDesc.status}` === "Pending" ? (
                  <>
                    <Link to={`/completion-form/${issueDesc.id}`}>
                      <Button name="Yes" className="pending-yes" />
                    </Link>
                    <Link to={`/cannot-resolve/${issueDesc.id}`}>
                      <Button name="No" className="pending-no" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={`/negotiate-form/${issueDesc.id}`}>
                      <Button name="Yes" className="pending-yes" />
                    </Link>
                    <Link to={`/cannot-resolve/${issueDesc.id}`}>
                      <Button name="No" className="pending-no" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
