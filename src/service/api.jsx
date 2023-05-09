import axios from "axios";
const issueAPI_URL = "http://127.0.0.1:3006/issues";
//get single issue data
export const getSingleIssue = async (data) => {
  try {
    return await axios.get(`${issueAPI_URL}/${data}`);
  } catch (error) {
    console.error(error);
  }
};
//edit single issue with user_id "id"
export const editIssueDetail = async (data, id) => {
  try {
    return await axios.put(`${issueAPI_URL}/${id}`, data);
  } catch (e) {
    console.log("Error while ", e.message);
  }
};
