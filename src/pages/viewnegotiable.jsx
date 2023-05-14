import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getissueData, updateIssueData } from "../service/api";
import { Button } from "../components/Button";

export const ViewNegotiable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState({
    id: id,
    desc: "",
    field: "",
    status: "",
    startingDate: "",
    endingDate: "",
    feasible: "",
    solvingtime: "",
    payment: "",
    acceptance: "",
    sorryMessage: "",
    completionMessage: "",
  });
  const getIssueDetail = async () => {
    let response = await getissueData(id);
    setIssueList(response.data);
  };
  useEffect(() => {
    getIssueDetail();
  }, []);

  const handleUpdate = () => {
    updateIssueData(issueList, id);
    alert("You updated your value");
    navigate("/");
  };

  return (
    <div className="view">
      <div className="view__wrapper">
        <div className="view-form">
          <div className="view-title">
            <h1>View Negotiable</h1>
          </div>
          <form>
            <div className="view-details">
              <label>Solving Time</label>
              <p>{issueList.solvingtime}</p>
              <label>Payment Amount</label>
              <p>{issueList.payment}</p>
              <Button
                name="Accept"
                value={(issueList.acceptance = "Yes")}
                handleClick={handleUpdate}
              />
              <Button
                name="Reject"
                value={(issueList.acceptance = "No")}
                handleClick={handleUpdate}
                className="reject-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

