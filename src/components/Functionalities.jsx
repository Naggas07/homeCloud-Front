import React from "react";
import "../styles/css/Functionalities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Functionality = ({ func }) => {
  return (
    <Link className="no-links" to={func.path}>
      <div className="containerFunctionality">
        <div className="iconContainer">
          <FontAwesomeIcon className="homeIcon" icon={func.photo} />
        </div>
        <div className="textContainer">{func.name}</div>
      </div>
    </Link>
  );
};

export default Functionality;
