import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const File = ({ name, icon, update }) => {
  return (
    <Fragment>
      <FontAwesomeIcon onClick={update} className="icon-list" icon={icon} />
      <h4 onClick={update} className="fileName">
        {name}
      </h4>
    </Fragment>
  );
};

export default File;
