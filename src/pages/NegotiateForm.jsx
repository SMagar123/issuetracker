import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { getSingleIssue, editIssueDetail } from "../service/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    notify();
    navigate("/");
  };
  const notify = () => {
    toast.info("Negotiation request is sent to user", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Feasible
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="feasible"
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                  onChange={(e) => handleIssueDetail(e)}
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                  onChange={(e) => handleIssueDetail(e)}
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              name="Query for Negotiation"
              className="submit-button"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
