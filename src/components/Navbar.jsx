import React, { useEffect, useState } from "react";
import { CloseIcon } from "../assets/icons/icons";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { getAdminDetail } from "../service/api";
// import "../assets/styles/components/navbar.scss";
export const Navbar = () => {
  const [adminDetail, setAdminDetail] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  useEffect(() => {
    obtainAdminDetail();
  }, []);
  const obtainAdminDetail = async () => {
    let response = await getAdminDetail();
    setAdminDetail(response.data);
  };
  return (
    <>
      <div className="hero__admindetails">
        <div className="project-title">
          <NavLink to="/">
            <h2>Negotiator App</h2>
          </NavLink>
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
