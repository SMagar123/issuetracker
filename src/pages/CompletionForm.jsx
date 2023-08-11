import React, { useContext, useEffect, useState } from "react";
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
import { LoginContext } from "../App";
import issueData from "../database/practice.json";
import { ToastContainer, toast } from "react-toastify";
const initialIssues = {
  status: "",
  endingDate: "",
  completionMessage: "",
};
export const CompletionForm = () => {
  const { selectField } = useContext(LoginContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState({});
  const [modifiableIssueList, setModifiableIssueList] = useState({});
  const [elementIndex, setElementIndex] = useState();
  const [adminNegotiateList, setAdminNegotiateList] = useState(initialIssues);

  useEffect(() => {
    getIssueDetailofUser();
  }, []);
  const getIssueDetailofUser = async () => {
    let response = await getSingleIssue(id);
    const negotiateData = response.data;
    setIssueList(
      negotiateData?.details?.filter((item) => item.field === selectField)
    );
    setModifiableIssueList(negotiateData);
  };
  const dataIndex = issueData?.issues?.findIndex((obj) => {
    return obj.id === id;
  });

  const indexFinder = () => {
    setElementIndex(
      issueData?.issues[dataIndex]?.details.findIndex((obj) => {
        return obj.field === selectField;
      })
    );
  };
  useEffect(() => {
    indexFinder();
  }, []);

  const handleIssueDetail = (e) => {
    setAdminNegotiateList({
      ...adminNegotiateList,
      [e.target.name]: e.target.value,
    });
  };

  const handleNegotiationQuery = (e) => {
    e.preventDefault();

    const finalAdminNegotiateList = {
      ...modifiableIssueList?.details[elementIndex],
      ...adminNegotiateList,
    };
    modifiableIssueList?.details?.splice(elementIndex, 1);
    modifiableIssueList?.details?.splice(
      elementIndex,
      0,
      finalAdminNegotiateList
    );
    editIssueDetail(modifiableIssueList, id);
    notify();
    navigate("/admin");
  };

  const notify = () => {
    toast.success("completion message sent to user", {
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
              <p>{issueList[0]?.startingDate}</p>
              <InputField
                type="date"
                name="endingDate"
                label="Completed Date"
                handleInput={(e) => handleIssueDetail(e)}
                // value={issueList[0]?.endingDate}
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
