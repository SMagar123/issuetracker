import React, { useEffect, useState, useContext } from "react";
import { Button } from "../components/Button";
import { AccountCircleIcon, AddIcon, CloseIcon } from "../assets/icons/icons";
// import issueData from "../database/issues.json";
import { Link, useNavigation, useParams, useNavigate } from "react-router-dom";
import { ViewNegotiable } from "./viewnegotiable";
import { getSingleUserData, getissueData, getIDsOfUser } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../App";
import { Navbar } from "../components";

const tableHead = [
  "Description",
  "Feature",
  "Registered-Date",
  "End-Date",
  "Status",
  "Negotiation",
];
// const data = issueData.issues;
export const User = () => {
  const { tokenString } = useContext(LoginContext);
  const navigate = useNavigate();
  const [currentIssueField, setCurrentIssueField] = useState("");

  const { id } = useParams();

  // const [viewProfile, setViewProfile] = useState(false);
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

  //obtaining data of the user from existing database

  const getRelatedIndividualData = async () => {
    const response = await getissueData(id);
    setIssueData(response.data);
  };
  const getUsersData = async () => {
    const response = await getSingleUserData(id);
    console.log(id);
    setUserData(response?.data);
  };
  useEffect(() => {
    if (usersId.length !== 0) {
      getRelatedIndividualData();
    }
  }, [userID.length]);
  const userDataLength = Object.keys(issueData).length;

  const handleLogout = () => {
    console.log("Logoutttttt");
    getLoggeout();
  };
  function getLoggeout() {
    sessionStorage.clear();
    window.location.reload();
  }

  const notifyError = () => {
    toast.error("You must login first!!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleView = (field) => {
    setViewDetails(!viewDetails);
    setCurrentIssueField(field);
  };
  const userRole = sessionStorage.getItem("role");
  if (!tokenString || userRole !== "user") {
    navigate("/");
    notifyError();
  } else {
    return (
      <>
        {/* ....top-navbar........ */}
        <Navbar />

        <div className="user">
          <div className="user-title">
            <h1>Negotiation List</h1>
            <div className="user-add">
              <span>
                <Link to={`/addissue/${id}`}>
                  <i>
                    <AddIcon />
                  </i>
                </Link>
              </span>

              {/* <span>
              <Link to="/issueinfo">Issue Info</Link>
            </span> */}
            </div>
          </div>
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
                        {/* <span>{issueData.id}</span> */}

                        <span>{item.field}</span>
                        <span>{item?.desc?.slice(0, 50)}</span>
                        <span>{item.startingDate}</span>
                        <span>
                          {item.endingDate === "" ? (
                            <>------</>
                          ) : (
                            <>{item.endingDate}</>
                          )}
                        </span>
                        <span>{item.status}</span>
                        {/* ....button for viewing...... */}
                        <div className="negotiation-button">
                          {item.feasible === "Yes" ? (
                            // <Link to={`/${item.id}`}>
                            <Button
                              name="View"
                              handleClick={() => handleView(item.field)}
                              // handleClick={() => console.log(`${item.field}`)}
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
                              {isHovered && (
                                <span>Will be activated soon </span>
                              )}
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
              <ViewNegotiable id={`${id}`} issueField={currentIssueField} />
            </div>
          ) : (
            " "
          )}
        </div>

        <ToastContainer />
      </>
    );
  }
};
