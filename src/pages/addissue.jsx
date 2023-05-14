import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const inputList = {
  id: "",
  desc: "",
  field: "",
  status: "",
  startingDate: "",
  endingDate: "",
  feasible: "",
  solvingtime:"",
  payment: "",
  acceptance: "",
  sorryMessage: "",
  completionMessage:""  
};
const issueData = " http://127.0.0.1:3006/issues";
export const AddIssue = () => {
  const navigate = useNavigate();
  const [issueList, setIssueList] = useState(inputList);
  // const date = new Date();
  const handleInputDetail = (e) => {
    setIssueList({ ...issueList, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${issueData}`, issueList);
    navigate("/");
  };

 

  return (
    <div className="add__issue">
    <div className="issue__form">
      <div className="form-title">
        <h1>Add Your Issue</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Issue</label>
          <textarea
            name="desc"
            cols="28"
            rows="8"
            onChange={(e) => handleInputDetail(e)}
          ></textarea>
          <InputField
            label="Field"
            placeholder="Type of issue"
            handleInput={(e) => handleInputDetail(e)}
            name="field"
          />
          <Box sx={{ minWidth: 450 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" color="primary">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Status"
                name="status"
                onChange={(e) => handleInputDetail(e)}
              >
                <MenuItem value="New">New</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <InputField
            label="Today's Date"
            type="date"
            name="startingDate"
            handleInput={(e) => handleInputDetail(e)}
          />
          <Button type="submit" name="Submit" />
        </form>

      </div>
    </div>
    </div>
  );
};
