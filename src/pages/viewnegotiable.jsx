import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getissueData } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components/Button";
import axios from "axios";
import issueData from "../database/practice.json";
const issuedata = " http://127.0.0.1:3004/issues/";
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
  const [elementIndex, setElementIndex] = useState();
  const [issueList, setIssueList] = useState({}); //purano data ho
  const [updateList, setUpdateList] = useState(detailsList);
  //obtaining the data from database of respective ID
  const getIssueDetail = async () => {
    let response = await getissueData(id);
    setIssueList(response.data);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  //obtaining data of the given issueField
  const requiredIssueDetails = issueList?.details?.filter((item) => {
    return item.field === issueField;
  });

  const notifyAcceptance = () => {
    toast.info("You have updated the acceptance status", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //obtaining the index of the element in details
  const dataIndex = issueData.issues.findIndex((obj) => {
    return obj.id === id;
  });
  const indexFinder = () => {
    setElementIndex(
      issueData.issues[dataIndex].details.findIndex((obj) => {
        return obj.field === issueField;
      })
    );
  };
  useEffect(() => {
    indexFinder();
  }, []);

  //assigning the new value to the list to be passed as updated list
  const handleAcceptance = (e) => {
    e.target.value === "Yes"
      ? setUpdateList({
          ...issueList.details[elementIndex],
          ["acceptance"]: e.target.value,
          ["status"]: "Pending",
        })
      : setUpdateList({
          ...issueList.details[elementIndex],
          ["acceptance"]: e.target.value,
          ["status"]: "Rejected",
        });

    notifyAcceptance();
  };
  //making the update request through axios
  const handleUpdate = () => {
    issueList.details.splice(elementIndex, 1);
    issueList.details.splice(elementIndex, 0, updateList);
    axios.put(`${issuedata}/${id}`, issueList);
    navigate(`/user/${id}`);
  };

  return (
    <div className="view">
      <div className="view__wrapper">
        <div className="view-form">
          <form onSubmit={handleUpdate}>
            <div className="view-Details">
              <label>Solving Time</label>
              {requiredIssueDetails === undefined ? (
                <p>------</p>
              ) : (
                <p>{requiredIssueDetails[0]?.solvingtime}</p>
              )}

              <label>Payment Amount</label>
              {requiredIssueDetails === undefined ? (
                <p>-----</p>
              ) : (
                <p>{requiredIssueDetails[0]?.payment}</p>
              )}
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
      <ToastContainer />
    </div>
  );
};
