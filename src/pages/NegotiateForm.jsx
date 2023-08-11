import React, { useContext, useEffect, useState } from "react";
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
import { Navbar } from "../components";
import { LoginContext } from "../App";
import negotiate from "../assets/images/negotiate.png";

import issueData from "../database/practice.json";
const initialIssues = {
  feasible: "",
  solvingtime: "",
  payment: "",
};
export const NegotiateForm = () => {
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
    <>
      <Navbar />
      <div className="negotiate">
        <div className="negotiate__form">
          <h4>Negotiation Information</h4>
          <div className="form">
            <div className="negotiate-image">
              <img src={negotiate} alt="negotiate" />
            </div>
            <form onSubmit={handleNegotiationQuery}>
              <label>Issue Registered Date</label>
              <p>{issueList[0]?.startingDate}</p>
              {issueList[0]?.solvingtime.length === "" ? (
                <InputField
                  type="date"
                  name="solvingtime"
                  label="Date To Solve"
                  handleInput={(e) => handleIssueDetail(e)}
                  required
                />
              ) : (
                <InputField
                  type="date"
                  name="solvingtime"
                  label="Date To Solve"
                  handleInput={(e) => handleIssueDetail(e)}
                  value={issueList[0]?.solvingtime}
                  required
                />
              )}

              <label>Counter Amount</label>
              <p>Rs.{issueList[0]?.renegotiateAmount}</p>
              <InputField
                type="number"
                name="payment"
                label="Propose Payment (Rs)"
                required
                handleInput={(e) => handleIssueDetail(e)}
                // value={issueList[0]?.payment}
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
    </>
  );
};
