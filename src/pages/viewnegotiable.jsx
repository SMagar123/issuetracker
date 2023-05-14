import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getissueData } from '../service/api';
import { InputField } from '../components/InputField';

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

export const ViewNegotiable=()=> {
    const { id } =useParams();
    const [issueList,setIssueList]= useState({
        id: id,
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
});
const getIssueDetail=async()=>{
    let response =await getissueData(id);
    setIssueList(response.data);
}
useEffect(()=>{
    getIssueDetail();
},[]);
  return (
    <div className='view'>
        <div className="view__wrapper">
                <h1>View Negotiable</h1>
            </div>
            <div className="view-form">
            <div className="view-title">
                <form>
                    <div className="form-details">
                        <label>Solving Time</label>
                        <p>{issueList.solvingtime[0]}</p>
                    </div>
                </form>
            </div>
        </div>      
    </div>
  )
}
