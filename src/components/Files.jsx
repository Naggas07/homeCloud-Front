import React, { Component } from "react";
import { WithAuthConsumer } from "../context/auth.context";
import "../styles/css/files.css";
import filesFoldersService from "../services/pathFilesServices";

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

  update = (event) => {
    const { id } = event.target;
    let nextPath = this.state.path === "" ? id : `${this.state.path}-${id}`;

    filesFoldersService
      .getFolder(nextPath)
      .then((data) => {
        this.setState({
          path: nextPath,
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
      <div className="func-container red">
        <div className="breads">{this.state.path}</div>
        {this.state.folders.length > 0 && (
          <div className="folders">
            <h1>Folders</h1>
            {this.state.folders.map((folder, index) => (
              <h1 id={folder} value={folder} onClick={this.update} key={index}>
                {folder}
              </h1>
            ))}
          </div>
        )}
        {this.state.files.length > 0 && (
          <div className="files">
            <h1>Files</h1>
            {this.state.files.map((file, index) => (
              <h1 key={index}>{file}</h1>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default WithAuthConsumer(Files);
