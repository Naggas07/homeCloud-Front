import React, { Component } from "react";
import filesFoldersService from "../services/pathFilesServices";

class FolderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "-",
      files: [],
      folder: [],
    };
  }

  componentDidMount() {
    filesFoldersService.getFolder(this.state.path).then((data) => {
      this.setState({ folder: data });
    });
  }

  render() {
    return <h1>Hola</h1>;
  }
}

export default FolderHome;
