import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { AccountCircleIcon } from "../assets/icons/icons";
import issueData from "../database/issues.json";
import { Link, useNavigation, useParams } from "react-router-dom";
// import Data from "../database/users.json";
// import { createPortal } from "react-dom";
import { ViewNegotiable } from "./viewnegotiable";
import { getSingleUserData, getissueData, getIDsOfUser } from "../service/api";
import { CloseIcon } from "../assets/icons/icons";

const tableHead = [
  "S.N.",
  "Issue",
  "Field",
  "Start-Date",
  "End-Date",
  "Status",
  "Negotiation",
];
const data = issueData.issues;
// const userData = Data.user;
export const User = () => {
  const { id } = useParams();
  const [viewProfile, setViewProfile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [issueData, setIssueData] = useState({});
  const [userData, setUserData] = useState();
  const [viewDetails, setViewDetails] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //obtaining ids of database of issues

  const [userID, setUserId] = useState([]);
  useEffect(() => {
    getUserIDs();
    getUsersData();
  }, []);

  const getUserIDs = async () => {
    const response = await getIDsOfUser();
    setUserId(response.data);
  };
  const usersId = userID.filter((item) => {
    return item.id === `${id}`;
  });

  // const displayDetails = (id) => {
  //   setUserId(id);
  //   setViewDetails(!viewDetails);
  // };
  // const [showModal, setShowModal] = useState(false);

  //obtaining data of the user from existing database

  const getRelatedIndividualData = async () => {
    const response = await getissueData(id);
    setIssueData(response.data);
  };
  const getUsersData = async () => {
    const response = await getSingleUserData(id);
    setUserData(response.data);
  };
  useEffect(() => {
    if (usersId.length !== 0) {
      getRelatedIndividualData();
    }
  }, [userID.length]);

  // useEffect(() => {
  //
  // }, []);

  const userDataLength = Object.keys(issueData).length;
  return (
    <>
      {/* ....top-navbar........ */}
      <div className="user__title">
        <h2>Issue Tracker</h2>
        <div className="user-nav">
          <span>
            <Link to={`/addissue/${id}`}>Add Issue</Link>
          </span>

          <span>
            <Link to="/issueinfo">Issue Info</Link>
          </span>
        </div>
        <div className="user__name">
          <i onClick={() => setViewProfile(!viewProfile)}>
            <Link to="/login">{viewProfile && <span>Log Out</span>}</Link>
            <AccountCircleIcon fontSize="large" />
          </i>
          <p>{userData?.username}</p>
        </div>
      </div>
      <div className="user">
        <h2>Negotiation List</h2>

        {/* .....issue list in table........ */}
        <div className="user__table">
          {tableHead.map((item) => {
            return (
              <span key={item} className="table-title">
                {item}
              </span>
            );
          })}
          {/* ........issue list..... */}
          {
            <>
              {userDataLength === 0 ? (
                <h3>Please Enter new Entry</h3>
              ) : (
                issueData?.details?.map((item) => {
                  return (
                    <>
                      <span>{issueData.id}</span>
                      <span>{item?.desc?.slice(0, 50)}</span>
                      <span>{item.field}</span>
                      <span>{item.startingDate}</span>
                      <span>{item.endingDate}</span>
                      <span>{item.status}</span>
                      {/* ....button for viewing...... */}
                      <div className="negotiation-button">
                        {item.feasible === "Yes" ? (
                          // <Link to={`/${item.id}`}>
                          <Button
                            name="View"
                            handleClick={() => setViewDetails(!viewDetails)}
                          />
                        ) : (
                          //  </Link>
                          <div className="hover-text">
                            <Button
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              name="On Process"
                              className="button-disabled"
                            />
                            {isHovered && <span>Will be activated soon </span>}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })
              )}
            </>
          }
        </div>
        {viewDetails ? (
          <div className="view-details">
            <CloseIcon onClick={() => setViewDetails(!viewDetails)} />
            <ViewNegotiable id={`${id}`} />
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
};
