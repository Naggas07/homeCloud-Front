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
import ErrorAlert from "./misc/errorAlert";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      folders: this.props.currentUser.data.folders,
      files: [],
      errors: {
        deleteFolder: false,
      },
      reload: false,
    };
  }

  toReload = () => {
    this.setState({
      reload: true,
    });
  };

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
          reload: false,
        });
      })
      .catch(() =>
        this.setState({
          errors: true,
        })
      );
  };

  deleteFolder = (route) => {
    filesFoldersService.deleteFolder(route).then((ok) => {
      if (ok.message) {
        this.setState({
          errors: { deleteFolder: true },
        });
      } else {
        this.toReload();
      }
    });
  };

  refresh = () => {
    this.reload(this.state.path);
  };

  resetErrors = () => {
    this.setState({
      errors: {},
    });
  };

  itsHisFolder = () => {
    return (
      this.state.path.split("-")[0] === this.props.currentUser.data.name ||
      this.state.path.split("-")[0] === "shared"
    );
  };

  render() {
    if (this.state.reload) {
      this.refresh();
    }

    return (
      <div className="func-container">
        {this.state.errors.deleteFolder && (
          <ErrorAlert
            message={"Error al borrar la carpeta, no está vacia"}
            hide={() => this.resetErrors()}
          />
        )}
        <div className="breads">
          <p>
            /
            {this.state.path.length > 0 && this.state.path.split("-").join("/")}
          </p>
          {this.state.path !== "" && (
            <FontAwesomeIcon
              className="logo-back"
              onClick={this.back}
              icon={faArrowCircleLeft}
            />
          )}
        </div>

        <div className="folders">
          <div className="header-list-items folder-header title-border">
            <h1 className="">
              {this.state.path === ""
                ? "Carpetas"
                : this.state.path.split("-").reverse()[0]}
            </h1>
            {this.state.path.length > 0 && this.itsHisFolder() && (
              <NewFolderModal reload={this.toReload} path={this.state.path} />
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
                  deleteItem={() =>
                    this.deleteFolder(`${this.state.path}-${folder}`)
                  }
                  less={this.state.path === "" ? false : true}
                  path={this.state.path}
                />
              </div>
            ))}
          </div>
        </div>

        {this.state.path !== "" && (
          <div className="files">
            <div className="header-list-items title-border">
              <h1 className="">Archivos</h1>
              {this.state.path !== "" && this.itsHisFolder() && (
                <FontAwesomeIcon className="add-icon" icon={faPlus} />
              )}
            </div>
            <div className="items-list-items">
              {this.state.files.map((file, index) => (
                <div id={file} className="file-container" key={index}>
                  <File
                    name={file}
                    icon={faFileImage}
                    image={`${process.env.REACT_APP_API}/files/file/${this.state.path}-${file}`}
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
