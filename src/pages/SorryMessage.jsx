import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputField } from "../components";
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
  sorryMessage: "",
};
export const SorryMessage = () => {
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
            <label>Issue Raised</label>
            <p>{issueList.desc}</p>
            <label htmlFor="sorry-message">Message</label>
            <textarea
              name="sorryMessage"
              onChange={(e) => handleIssueDetail(e)}
              cols="30"
              rows="10"
              required
            ></textarea>
            <InputField
              type="text"
              name="status"
              label="Status"
              value={issueList.status}
              handleInput={(e) => handleIssueDetail(e)}
            />
            <Button
              type="submit"
              name="Sorry Message"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
