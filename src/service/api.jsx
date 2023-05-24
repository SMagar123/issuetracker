import axios from "axios";

const issueAPI_URL = "http://127.0.0.1:3006/issues";
const adminAPI_URL = " http://127.0.0.1:3004/admin-detail";
//get single issue data
export const getSingleIssue = async (data) => {
  try {
    return await axios.get(`${issueAPI_URL}/${data}`);
  } catch (error) {
    return error;
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

//get admin details

export const getAdminDetail = async () => {
  try {
    return await axios.get(`${adminAPI_URL}`);
  } catch (e) {
    console.log("Error while ", e.message);


const issueData = " http://127.0.0.1:3004/issues";
const userData = "http://127.0.0.1:3005/users";

//obtaining user ids of the issues database
export const getIDsOfUser = async () => {
  try {
    return await axios.get(issueData);
  } catch (error) {
    console.error(error);
  }
};

export const getissueData = async (id) => {
  try {
    return await axios.get(`${issueData}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
export const updateIssueData = async (data, id) => {
  try {
    return await axios.put(`${issueData}/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

//get single user data
export const getSingleUserData = async (id) => {
  try {
    return await axios.get(`${userData}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const addMultipleEntry = async (id) => {
  try {
    return await axios.post(`${issueData}/${id}`);
  } catch (error) {
    console.error(error);

  }
};
