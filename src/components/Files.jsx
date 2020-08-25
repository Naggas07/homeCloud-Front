import React, { Component } from "react";
import { WithAuthConsumer } from "../context/auth.context";
import "../styles/css/files.css";
import filesFoldersService from "../services/pathFilesServices";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { faFileImage } from "@fortawesome/free-solid-svg-icons/faFileImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "./visual/file";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NewFolderModal from "./visual/newFolderModal";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      folders: this.props.currentUser.data.folders,
      files: [],
      errors: false,
    };
  }

  back = () => {
    const back = this.state.path.split("-");
    const lastPath = back.slice(0, back.length - 1).join("-");

    if (back.length === 1) {
      this.setState({
        path: "",
        folders: this.props.currentUser.data.folders,
        files: [],
      });
    } else {
      this.reload(lastPath);
    }
  };

  updateImage = (name) => {
    let nextPath = this.state.path === "" ? name : `${this.state.path}-${name}`;
    return !name ? "" : this.reload(nextPath);
  };

  update = (event) => {
    const { id } = event.target;

    let nextPath = this.state.path === "" ? id : `${this.state.path}-${id}`;

    return !id ? "" : this.reload(nextPath);
  };

  reload = (path) => {
    filesFoldersService
      .getFolder(path)
      .then((data) => {
        this.setState({
          path: path,
          folders: data.folders,
          files: data.files,
          nextPath: "",
        });
      })
      .catch(() =>
        this.setState({
          errors: true,
        })
      );
  };

  render() {
    return (
      <div className="func-container">
        <div className="breads">
          <p>
            /{this.state.path.length > 0 && this.state.path.replace("-", "/")}
          </p>
          <FontAwesomeIcon
            className="logo-back"
            onClick={this.back}
            icon={faArrowCircleLeft}
          />
        </div>

        <div className="folders">
          <div className="header-list-items title-border">
            <h1 className="">Carpetas</h1>
            {this.state.path.length > 0 &&
              (this.state.path.split("-")[0] ===
                this.props.currentUser.data.name ||
                this.state.path.split("-")[0] === "shared") && (
                <NewFolderModal />
              )}
          </div>
          <div className="items-list-items">
            {this.state.folders.map((folder, index) => (
              <div
                id={folder}
                className="file-container"
                onClick={this.update}
                key={index}
              >
                <File
                  name={folder}
                  update={() => this.updateImage(folder)}
                  icon={faFolder}
                />
              </div>
            ))}
          </div>
        </div>

        {this.state.path !== "" && (
          <div className="files">
            <div className="header-list-items title-border">
              <h1 className="">Archivos</h1>
              {this.state.path !== "" && (
                <FontAwesomeIcon className="add-icon" icon={faPlus} />
              )}
            </div>
            <div className="items-list-items">
              {this.state.files.map((file, index) => (
                <div id={file} className="file-container" key={index}>
                  <File
                    name={file}
                    icon={faFileImage}
                    image={`http://localhost:5000/files/file/${this.state.path}-${file}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WithAuthConsumer(Files);
