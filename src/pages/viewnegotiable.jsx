import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getissueData, updateIssueData } from "../service/api";
import { Button } from "../components/Button";
import axios from "axios";
const issuedata = " http://127.0.0.1:3004/issues/";
const inputList = {
  id: "",
  details: [],
};
const detailsList = {
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
  requirement: [],
};
export const ViewNegotiable = ({ id, issueField }) => {
  const navigate = useNavigate();

  const [issueList, setIssueList] = useState([]); //purano data ho

  const getIssueDetail = async () => {
    console.log("hello");
    let response = await getissueData(id);
    setIssueList(response.data);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  const requiredIssueDetails = issueList?.details?.filter((item) => {
    return item.field === issueField;
  });

  const [updateList, setUpdateList] = useState(detailsList);

  const handleAcceptance = (e) => {
    setUpdateList({
      ...updateList,
      ["acceptance"]: e.target.value,
      ["status"]: "Pending",
    });
  };

  const handleUpdate = () => {
    issueList.details.push(updateList);
    axios.put(`${issuedata}/${id}`, issueList);
    alert("You updated your value");
    navigate(`/user/${id}`);
  };
  return (
    <div className="view">
      <div className="view__wrapper">
        <div className="view-form">
          {/* <div className="view-title">
            <h1>View Negotiable</h1>
          </div> */}
          <form onSubmit={handleUpdate}>
            <div className="view-Details">
              <label>Solving Time</label>
              <p>{requiredIssueDetails[0]?.solvingtime}</p>
              <label>Payment Amount</label>
              <p>{requiredIssueDetails[0]?.payment}</p>
              <Button
                name="Accept"
                value="Yes"
                handleClick={(e) => handleAcceptance(e)}
              />
              <Button
                name="Reject"
                value="No"
                handleClick={(e) => handleAcceptance(e)}
                className="reject-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
