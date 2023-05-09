import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { getSingleIssue, editIssueDetail } from "../service/api";
const initialIssues = {
  desc: "",
  field: "",
  status: "",
  startingDate: "",
  endingDate: "",
  feasible: "",
  solvingtime: "",
  payment: "",
  acceptance: "",
};
export const NegotiateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState(initialIssues);

  useEffect(() => {
    getIssueDetailofUser();
  }, []);
  const getIssueDetailofUser = async () => {
    let response = await getSingleIssue(id);
    setIssueList(response.data);
  };

  const handleIssueDetail = (e) => {
    setIssueList({ ...issueList, [e.target.name]: e.target.value });
  };
  const handleNegotiationQuery = () => {
    editIssueDetail(issueList, id);
    navigate("/");
  };
  return (
    <div className="negotiate">
      <div className="negotiate__form">
        <h4>Negotiation Information</h4>
        <div className="form">
          <form onSubmit={handleNegotiationQuery}>
            <label>Issue Registered Date</label>
            <p>{issueList.startingDate}</p>
            <InputField
              type="date"
              name="solvingtime"
              label="Date To Solve"
              handleInput={(e) => handleIssueDetail(e)}
              value={issueList.solvingtime}
              required
            />
            <InputField
              type="number"
              name="payment"
              label="Payment"
              required
              handleInput={(e) => handleIssueDetail(e)}
              value={issueList.payment}
            />
            <InputField
              type="text"
              name="payment"
              label="Feasible"
              value="Yes"
              handleInput={(e) => handleIssueDetail(e)}
              disabled
            />
            <Button
              type="submit"
              name="Query for Negotiation"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
