import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getissueData } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components/Button";
import axios from "axios";
import issueData from "../database/practice.json";
import contract from "../assets/images/contract.png";
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
  approval: "",
  renegotiateAmount: "",
  completionMessage: "",
  requirement: [],
};
export const ViewNegotiable = ({ id, issueField }) => {
  const navigate = useNavigate();
  const [elementIndex, setElementIndex] = useState();
  const [issueList, setIssueList] = useState({}); //purano data ho
  const [updateList, setUpdateList] = useState(detailsList);
  const [renegotiateAmount, setRenegotiateAmount] = useState();
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

  const negotiationAmount = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setRenegotiateAmount(0);
    } else {
      setRenegotiateAmount(e.target.value);
    }
  };
  //assigning the new value to the list to be passed as updated list65
  const handleAcceptance = (e) => {
    e.target.value === "Yes"
      ? setUpdateList({
          ...issueList.details[elementIndex],
          ["acceptance"]: e.target.value,
          ["status"]: "Pending",
          ["approval"]: "Approved",
        })
      : e.target.value === "No"
      ? setUpdateList({
          ...issueList.details[elementIndex],
          ["acceptance"]: e.target.value,
          ["status"]: "Rejected",
          ["approval"]: "Rejected",
        })
      : setUpdateList({
          ...issueList.details[elementIndex],
          ["acceptance"]: "Yes",
          ["status"]: "New",
          ["renegotiateAmount"]: renegotiateAmount,
        });
    notifyAcceptance();
  };
  //making the update request through axios
  const handleUpdate = (e) => {
    e.preventDefault();
    issueList.details.splice(elementIndex, 1);
    issueList.details.splice(elementIndex, 0, updateList);
    axios.put(`${issuedata}/${id}`, issueList);
    navigate(`/user/${id}`);
  };

  return (
    <div className="view">
      <div className="view__wrapper">
        <div className="view-form">
          <div className="contract-image">
            <img src={contract} alt="contract" />
          </div>
          <form onSubmit={handleUpdate}>
            <h3>Negotiation Acceptance</h3>
            <div className="negotiation-dealing">
              <div className="view-Details">
                <label>Feature</label>
                {requiredIssueDetails === undefined ? (
                  <p>-----</p>
                ) : (
                  <p>{requiredIssueDetails[0]?.field}</p>
                )}
                <label>Proposed Solving Time</label>
                {requiredIssueDetails === undefined ? (
                  <p>------</p>
                ) : (
                  <p>{requiredIssueDetails[0]?.solvingtime}</p>
                )}
                <label>Approval Status</label>
                {requiredIssueDetails === undefined ||
                requiredIssueDetails[0]?.approval.length === 0 ? (
                  <p>------</p>
                ) : (
                  <p>{requiredIssueDetails[0]?.approval}</p>
                )}

                <label>Proposed Amount </label>
                {requiredIssueDetails === undefined ? (
                  <p>-----</p>
                ) : (
                  <p>Rs.{requiredIssueDetails[0]?.payment}</p>
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
              <div className="renegotiate">
                <label htmlFor="description">Description</label>
                <p>
                  {requiredIssueDetails === undefined ? (
                    <p>------</p>
                  ) : (
                    <p>{requiredIssueDetails[0]?.desc}</p>
                  )}
                </p>
                <label htmlFor="description">Status of Project</label>
                <p>
                  {requiredIssueDetails === undefined ? (
                    <p>------</p>
                  ) : (
                    <p>{requiredIssueDetails[0]?.status}</p>
                  )}
                </p>

                <label htmlFor="description">Counter Amount</label>
                <p>
                  {requiredIssueDetails === undefined ||
                  requiredIssueDetails[0]?.renegotiateAmount.length === 0 ? (
                    <p>Rs.0</p>
                  ) : (
                    // {requiredIssueDetails[0]?.renegotiateAmount.length===0?<p>Rs.0<p/>:

                    <p>Rs.{requiredIssueDetails[0]?.renegotiateAmount}</p>
                  )}
                </p>
                <label>Renegotiate</label>
                {requiredIssueDetails === undefined ||
                requiredIssueDetails[0]?.approval === "Approved" ||
                requiredIssueDetails[0]?.approval === "Rejected" ? (
                  <input
                    type="number"
                    name="renegotiateAmount"
                    placeholder="Enter counter amount"
                    onChange={(e) => negotiationAmount(e)}
                    disabled
                  />
                ) : (
                  <input
                    type="number"
                    name="renegotiateAmount"
                    placeholder="Enter counter amount"
                    onChange={(e) => negotiationAmount(e)}
                  />
                )}
                {requiredIssueDetails === undefined ||
                requiredIssueDetails[0]?.approval === "Approved" ||
                requiredIssueDetails[0]?.approval === "Rejected" ? (
                  <Button
                    name="Renegotiate"
                    handleClick={(e) => handleAcceptance(e)}
                    // className="reject-button"
                    disabled="true"
                    type="submit"
                  />
                ) : (
                  <Button
                    name="Renegotiate"
                    handleClick={(e) => handleAcceptance(e)}
                    type="submit"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
