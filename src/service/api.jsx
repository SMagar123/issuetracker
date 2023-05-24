import axios from "axios";

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
