import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faVideo,
  faFilePdf,
  faFileExcel,
  faFileCsv,
  faFileAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { WithAuthConsumer } from "../../context/auth.context";
import "../../styles/css/visual/extensions-Colors.css";
import "../../styles/css/visual/file.css";
import { Card } from "react-bootstrap";

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
  let extension = name.includes(".") ? name.split(".").reverse()[0] : null;

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
    case "txt":
      srcIcon = faFileAlt;
      break;
    default:
      srcIcon = faFile;
      break;
  }

  const iconToShow = () => {
    if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      return (
        <div className="image-item">
          <Card.Img src={image} alt="imagen" />
        </div>
      );
    } else if (image && srcIcon) {
      return (
        <Card.Body className="image-item">
          <FontAwesomeIcon
            onClick={update}
            className={`icon-list ${iconStyle}`}
            icon={srcIcon}
          />
        </Card.Body>
      );
    } else {
      return (
        <Card.Body className="image-item">
          <FontAwesomeIcon
            onClick={update}
            className={`icon-list ${iconStyle}`}
            icon={icon}
          />
        </Card.Body>
      );
    }
  };

  let iconShow = iconToShow();
  console.log(name.name);
  return (
    // <h1>Hola</h1>
    <Card className="container-File">
      <div className="minus">
        {less && currentUser.data.name === path.split("-")[0] && (
          <FontAwesomeIcon onClick={deleteItem} icon={faMinus} />
        )}
      </div>
      {iconShow}
      <Card.Footer className="image-footer">{name}</Card.Footer>
    </Card>
  );
};

export default WithAuthConsumer(File);
