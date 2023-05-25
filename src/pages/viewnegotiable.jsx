import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getissueData } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components/Button";
import axios from "axios";
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

  const [issueList, setIssueList] = useState([]); //purano data ho

  const getIssueDetail = async () => {
    console.log("hello there");
    let response = await getissueData(id);
    setIssueList(response.data);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  const requiredIssueDetails = issueList?.details?.filter((item) => {
    console.log(issueField, "Yei ho la");
    console.log(item.field, "naya yei ho hai");
    return item.field === issueField;
  });
  console.log(requiredIssueDetails, "isuueeeee");
  const notifyError = () => {
    toast.error("You accepted the admin condition", {
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

  const [updateList, setUpdateList] = useState(detailsList);

  const handleAcceptance = (e) => {
    setUpdateList({
      ...updateList,
      ["acceptance"]: e.target.value,
      ["status"]: "Pending",
    });
    notifyError();
  };

  const handleUpdate = () => {
    issueList.details.push(updateList);
    axios.put(`${issuedata}/${id}`, issueList);
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
