import React from "react";
import "../../styles/css/misc/navbar.css";
import logo from "../../styles/images/cloud-4-xxl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons/faPowerOff";
import { WithAuthConsumer } from "../../context/auth.context";

const NavBar = ({ currentUser, logout }) => {
  return (
    <nav className={`navbar ${!currentUser ? "no-visual" : ""}`}>
      <div className="logoContainer">
        <a className="flex-center2" href="/home">
          <img className="navLogo" src={logo} alt="logo" />
          <h3 className="navName">myCloud</h3>
        </a>
      </div>
      <div className="logoutContainer">
        <FontAwesomeIcon
          onClick={logout}
          icon={faPowerOff}
          className="white offSize"
        />
      </div>
    </nav>
  );
};

export default WithAuthConsumer(NavBar);
