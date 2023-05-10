import axios from "axios";

const issueData= " http://127.0.0.1:3006/issues";

export const getissueData=async()=>{
    try{
        return await axios.post(issueData);
    }
    catch(error){
        console.error(error);
    }

}