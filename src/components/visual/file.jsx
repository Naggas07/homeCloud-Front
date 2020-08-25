import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { WithAuthConsumer } from "../../context/auth.context";

const File = ({
  name,
  icon,
  update,
  image,
  deleteItem,
  less,
  currentUser,
  path,
}) => {
  return (
    <div className="container-File">
      <div className="minus">
        {less && currentUser.data.name === path.split("-")[0] && (
          <FontAwesomeIcon onClick={deleteItem} icon={faMinus} />
        )}
      </div>

      <div>
        {image && <img className="image-list" src={image} alt="imagen" />}
        {!image && (
          <FontAwesomeIcon onClick={update} className="icon-list" icon={icon} />
        )}
        <h4 onClick={update} className="fileName pb-2">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default WithAuthConsumer(File);
