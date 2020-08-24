import React from "react";
import "../styles/css/Functionalities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Functionality = ({ func }) => {
  return (
    <div className="containerFunctionality">
      <div className="iconContainer">
        <FontAwesomeIcon className="homeIcon" icon={func.photo} />
      </div>
      <div className="textContainer">{func.name}</div>
    </div>
  );
};

export default Functionality;
