import axios from "axios";

const issueData= " http://127.0.0.1:3006/issues";

export const getissueData=async(id)=>{
    try{
        return await axios.get(`${issueData}/${id}`);
    }
    catch(error){
        console.error(error);
    }

}
export const updateIssueData = async (data, id) => {
    try {
      return await axios.put(`${issueData}/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };
