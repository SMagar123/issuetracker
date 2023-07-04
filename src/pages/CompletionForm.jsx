import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { getSingleIssue, editIssueDetail } from "../service/api";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Navbar } from "../components";
import completion from "../assets/images/completion.png";
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
export const CompletionForm = () => {
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
    navigate("/admin");
  };
  return (
    <>
      <Navbar />
      <div className="negotiate">
        <div className="negotiate__form">
          <h4>Completion Information</h4>
          <div className="form">
            <div className="negotiate-image">
              <img src={completion} alt="negotiate" />
            </div>
            <form onSubmit={handleNegotiationQuery}>
              <label>Issue Registered Date</label>
              <p>{issueList.startingDate}</p>
              <InputField
                type="date"
                name="endingDate"
                label="Completed Date"
                handleInput={(e) => handleIssueDetail(e)}
                value={issueList.endingDate}
                required
              />
              <label htmlFor="complete-message">Message</label>
              <textarea
                name="completionMessage"
                onChange={(e) => handleIssueDetail(e)}
                cols="40"
                rows="5"
                required
              ></textarea>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    name="status"
                    onChange={(e) => handleIssueDetail(e)}
                  >
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    <MenuItem value={"Solved"}>Solved</MenuItem>
                    <MenuItem value={"Reject"}>Rejected</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                type="submit"
                name="Completed"
                className="submit-button"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
