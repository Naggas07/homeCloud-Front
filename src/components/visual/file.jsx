import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faVideo,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { WithAuthConsumer } from "../../context/auth.context";
import "../../styles/css/visual/extensions-Colors.css";

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
  let srcIcon;
  let iconStyle = "";
  let extension = name.split(".").reverse()[0];

  switch (extension) {
    case "mp4":
      srcIcon = faVideo;
      break;
    case "pdf":
      srcIcon = faFilePdf;
      iconStyle = "pdf";
      break;
    case "xlsx":
      srcIcon = faFileExcel;
      iconStyle = "excel";
      break;
    case "xls":
      srcIcon = faFileExcel;
      iconStyle = "excel";
      break;
    case "csv":
      srcIcon = faFileCsv;
      iconStyle = "excel";
      break;
    default:
      srcIcon = null;
      break;
  }

  const iconToShow = () => {
    if (image && !srcIcon) {
      return <img className="image-list" src={image} alt="imagen" />;
    } else if (image && srcIcon) {
      return (
        <FontAwesomeIcon
          onClick={update}
          className={`icon-list ${iconStyle}`}
          icon={srcIcon}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          onClick={update}
          className={`icon-list ${iconStyle}`}
          icon={icon}
        />
      );
    }
  };

  return (
    <div className="container-File">
      <div className="minus">
        {less && currentUser.data.name === path.split("-")[0] && (
          <FontAwesomeIcon onClick={deleteItem} icon={faMinus} />
        )}
      </div>

      <div>
        {iconToShow()}

        <h4 onClick={update} className="fileName pb-2">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default WithAuthConsumer(File);
