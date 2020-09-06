import React, { Component } from "react";
import filesFoldersService from "../services/pathFilesServices";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import File from "./visual/file";

class FolderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "-",
      files: [],
      folder: {},
      reload: false,
      errors: {
        folders: false,
      },
    };
  }

  componentDidMount() {
    filesFoldersService.getFolder(this.state.path).then((data) => {
      this.setState({ folder: data });
    });
  }

  reload = (id) => {
    filesFoldersService
      .getFolder(id)
      .then((folder) => {
        this.setState({
          path: folder.path,
          folders: folder.childs,
          files: folder.files,
          reload: false,
        });
      })
      .catch(() => this.setState({ errors: { folders: true } }));
  };

  toReload = () => this.setState({ reload: true });

  refresh = () => {
    this.state.reload(this.state.folder.id);
  };

  //pending to create next step

  render() {
    if (this.state.reload) {
      this.refresh();
    }

    return (
      <div className="func-container">
        <div className="breads"></div>
        <div className="folders">
          <div className="header-list-items folder-header tittle-border">
            <h2 className="titte-name">
              {this.state.path === "-" ? "Carpetas" : this.state.folder.name}
            </h2>
          </div>
          <div className="item-list-items">
            {this.state.folder.childs &&
              this.state.folder.childs.map((folder, index) => (
                <div id={folder.id} key={index} className="file-container">
                  <File name={folder.name} icon={faFolder} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FolderHome;
