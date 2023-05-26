import React, { useEffect, useState, useContext } from "react";
import { CloseIcon, AccountCircleIcon } from "../assets/icons/icons";
import { NavLink, Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { getSingleUserData } from "../service/api";
import { getAdminDetail } from "../service/api";
import secureLocalStorage from "react-secure-storage";
import logo from "../assets/images/logo.ico";
export const Navbar = () => {
  const { id } = useParams();
  const userRole = sessionStorage.getItem("role");
  const [adminDetail, setAdminDetail] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const getUsersData = async () => {
    const response = await getSingleUserData(id);
    setUserData(response?.data);
  };
  useEffect(() => {
    userRole === "user" ? getUsersData() : obtainAdminDetail();
  }, []);

  const obtainAdminDetail = async () => {
    let response = await getAdminDetail();
    setAdminDetail(response.data);
  };
  const handleLogout = () => {
    getLoggeout();
  };
  function getLoggeout() {
    secureLocalStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  }
  console.log(userRole);
  return (
    <>
      <div className="hero__admindetails">
        <div className="project-title">
          {userRole === "user" ? (
            <NavLink to={`/user/${id}`}>
              <img src={logo} alt="logo" />
              <h2>NTS</h2>
            </NavLink>
          ) : userRole === "admin" ? (
            <NavLink to="/admin">
              <img src={logo} alt="logo" />
              <h2>NTS</h2>
            </NavLink>
          ) : (
            <NavLink to="/">
              <img src={logo} alt="logo" />
              <h2>NTS</h2>
            </NavLink>
          )}
        </div>
        {userRole === "user" ? (
          <div className="user__name">
            <i onClick={() => setViewProfile(!viewProfile)}>
              <AccountCircleIcon fontSize="large" />
              <Link onClick={() => handleLogout()}>
                {viewProfile && <span>Log Out</span>}
              </Link>
            </i>
            <p>{userData?.username}</p>
          </div>
        ) : (
          <>
            <div className="admin">
              {adminDetail.map((item) => {
                return (
                  <>
                    <div className="admin-image">
                      <img src={item.profile_url} alt="profile" />
                    </div>
                    <p>{item.username}</p>
                  </>
                );
              })}
              <div className="admin-edit">
                <Button
                  name="Profile"
                  handleClick={() => setCloseModal(!closeModal)}
                />
                <Button name="Logout" handleClick={() => handleLogout()} />
              </div>
            </div>
            {closeModal ? (
              <div className="admin-details">
                <div className="close-icon">
                  <CloseIcon
                    fontSize="large"
                    onClick={() => setCloseModal(!closeModal)}
                  />
                </div>

                <div className="admin-card">
                  {adminDetail.map((item) => {
                    return (
                      <>
                        <div className="profile">
                          <img src={item.profile_url} alt="profile" />
                        </div>
                        <div className="profile-info">
                          <label htmlFor="username">Username</label>
                          <p>{item.username}</p>
                          <label htmlFor="email">Email</label>
                          <p>{item.email}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
};
