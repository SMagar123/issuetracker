import React, { useEffect, useState } from "react";
import { CloseIcon, AccountCircleIcon } from "../assets/icons/icons";
import { NavLink, Link,useParams} from "react-router-dom";
import { Button } from "./Button";
import { getSingleUserData } from "../service/api";
import { getAdminDetail } from "../service/api";
export const Navbar = () => {
  const [adminDetail, setAdminDetail] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [userData, setUserData] = useState();
  console.log(userData);

  const getUsersData = async () => {
    const response = await getSingleUserData(id);
    console.log(id);
    setUserData(response?.data);
  };
  useEffect(() => {
    // obtainAdminDetail();
    getUsersData();
  }, []);
  const obtainAdminDetail = async () => {
    let response = await getAdminDetail();
    setAdminDetail(response.data);
  };
  const handleLogout = () => {
  console.log('Logoutttttt');
  getLoggeout();
};
function getLoggeout() {
  sessionStorage.clear();
  window.location.reload();
}

const { id } = useParams();
  return (
    <>
      <div className="hero__admindetails">
        <div className="project-title">
          <NavLink to="/">
            <h2>Negotiator App</h2>
          </NavLink>
            <div className="user__name">
            <i onClick={() => setViewProfile(!viewProfile)}>
              <Link onClick={() => handleLogout()}>
                {viewProfile && <span>Log Out</span>}
              </Link>
              <AccountCircleIcon fontSize="large" />
            </i>
            <p>{userData?.username}</p>
          </div>
        </div>
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
            <Button name="Logout" />
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
      </div>
    </>
  );
};
