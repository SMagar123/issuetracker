import React, { useContext, useEffect, useState } from "react";
import { getSingleIssue } from "../service/api";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const DisplayDescription = ({ user_id, selectedField }) => {
  const [issueDesc, setissueDesc] = useState();
  const getissueDescofUser = async () => {
    let response = await getSingleIssue(user_id);
    setissueDesc(response.data);
  };
  useEffect(() => {
    getissueDescofUser();
  }, [user_id]);
  const issueDescription = issueDesc?.details.filter(
    (item) => item?.field === selectedField
  );
  return (
    <>
      {issueDescription === undefined ? (
        ""
      ) : (
        <div className="description-model">
          <div className="field">
            <h3>{selectedField}</h3>
          </div>
          <div className="details">
            <div className="details-viewing">
              <div className="user_id">
                <label htmlFor="user_id">user_id</label>
                <h5>{user_id}</h5>
              </div>
              <div className="registeredDate">
                <label htmlFor="Registered Date">Registered Date</label>
                <h5>{issueDescription[0]?.startingDate}</h5>
              </div>
              <div className="solvedDate">
                <label htmlFor="Solved Date">Solved Date</label>
                {issueDescription[0]?.endingDate === "" ? (
                  <h5>----</h5>
                ) : (
                  <h5>{issueDescription[0]?.endingDate}</h5>
                )}
              </div>
              <div className="status">
                <label htmlFor="Status">Status</label>
                <h5>{issueDescription[0]?.status}</h5>
              </div>
            </div>
            <div className="details-handling">
              <div className="description">
                <label htmlFor="description">Description</label>
                <p>{issueDescription[0]?.desc}</p>
              </div>
              <div className="viewRequirements">
                <Link to={`/admin/requirement/${user_id}`}>
                  <button>View Requirements</button>
                </Link>
              </div>
              <div className="feasible">
              
                {issueDescription[0]?.status === "Solved" ||
                issueDescription[0]?.status === "Rejected" ? (
                  <>
                    <label htmlFor="feasible">Completion</label>
                    <h4>Done it</h4>
                  </>
                ) : `${issueDescription[0]?.status}` === "Pending" ? (
                  <>
                    <label htmlFor="feasible">Completion</label>
                    <Link to={`/admin/completion-form/${user_id}`}>
                      <Button name="Yes" className="pending-yes" />
                    </Link>
                    <Link to={`/admin/cannot-resolve/${user_id}`}>
                      <Button name="No" className="pending-no" />
                    </Link>
                  </>
                ) : (
                  <>
                    <label htmlFor="feasible">Feasible</label>
                    <Link to={`/admin/negotiate-form/${user_id}`}>
                      <Button name="Yes" className="pending-yes" />
                    </Link>
                    <Link to={`/admin/cannot-resolve/${user_id}`}>
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
