import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const File = ({ name, icon }) => {
  return (
    <Fragment>
      <FontAwesomeIcon className="icon-list" icon={icon} />
      <h4 className="fileName">{name}</h4>
    </Fragment>
  );
};

export default File;
