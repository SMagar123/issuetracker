import React from "react";
import { Button } from "../components/Button";
import issueData from "../database/issues.json";
import { AccountCircleIcon} from "../assets/icons/icons";

const tableHead = ["Issue", "Field", "Start-Date", "End-Date", "Status",];
const data = issueData.issues;
export const User = () => {
  return (
    <div className="user">
      <div className="user__header">
        <h1>Issue Tracker</h1>
        <span></span>
        <AccountCircleIcon fontSize="large"/>
      </div>
      <div className="user__button">
        <Button className={"adduser"} name="Add User" />
      </div>
      <div className="user__table">
           {tableHead.map((item) => {
            return(<span key={item} className="table-head">{item}</span>);
          })}
          {
          data.map((item) => {
            return (
              <>
                <span>{item.desc.slice(0,50)}</span>
                <span>{item.field}</span>
                <span>{item.startingDate}</span>
                <span>{item.endingDate}</span>
                <span>{item.status}</span>
              </>
            );
          })} 
      
      </div>
    </div>
  );
};
