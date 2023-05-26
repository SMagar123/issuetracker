import React, { useEffect, useState, useContext } from "react";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { addMultipleEntry, getissueData } from "../service/api";
import { LoginContext } from "../App";
import { Navbar } from "../components";
const inputList = {
  id: "",
  details: [],
};
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
const issuedata = " http://127.0.0.1:3004/issues/";
export const AddIssue = () => {
  const { tokenString } = useContext(LoginContext);
  const userRole = sessionStorage.getItem("role");
  const navigate = useNavigate();
  const { id } = useParams();
  const [issueList, setIssueList] = useState(detailsList);

  //adding more records to details of already records having user
  const [puranoData, setPuranoData] = useState({});
  const handleInputDetail = (e) => {
    setIssueList({
      ...issueList,
      [e.target.name]: e.target.value,
      ["status"]: "New",
    });
  };
  useEffect(() => {
    getPuranoData(id);
  }, []);

  const getPuranoData = async (user_id) => {
    const response = await getissueData(user_id);
    setPuranoData(response?.data);
  };

  const updateList = () => {
    issueList.requirement.push(fileName);
    puranoData.details.push(issueList);
    axios.put(`${issuedata}/${id}`, puranoData);
    navigate(`/user/${id}`);
  };

  //Adding record for new user
  const [addingList, setAddingList] = useState(inputList);
  const addList = () => {
    addingList.id = `${id}`;
    issueList.requirement.push(fileName);
    addingList.details.push(issueList);
    axios.post(`${issuedata}`, addingList);
    navigate(`/user/${id}`);
  };

  //file handling
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Upload Requirement File");
  const [uploadedFile, setUploadedFile] = useState({});

  const handlePdfUploading = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };
  const handleUplaodPdf = async (e) => {
    /*uploading pdf file */
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    handleUplaodPdf(e);
    puranoData === undefined ? addList() : updateList();
  };
  if (tokenString && userRole === "user") {
    return (
      <div className="issue__form">
        <Navbar />
        <div className="form-title">
          <h1>Add the Feature Required</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Feature"
              placeholder="Type of issue"
              handleInput={(e) => handleInputDetail(e)}
              name="field"
              required
            />
            <label>Description</label>
            <textarea
              name="desc"
              cols="28"
              rows="8"
              onChange={(e) => handleInputDetail(e)}
              required
            ></textarea>
            <InputField
              label="Status"
              value="New"
              handleInput={(e) => handleInputDetail(e)}
              disabled
              name="status"
              required
            />
            <InputField
              label=" Today's Date"
              type="date"
              name="startingDate"
              handleInput={(e) => handleInputDetail(e)}
              required
            />

            <InputField
              label="Upload Requirement File"
              type="file"
              handleInput={(e) => handlePdfUploading(e)}
              className="form-file"
              required
            />
            <Button type="submit" name="Submit" className="submit-button" />
          </form>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};
