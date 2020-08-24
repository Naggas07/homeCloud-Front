import React, { Component, Fragment } from "react";
import Functionality from "./Functionalities";
import { WithAuthConsumer } from "../context/auth.context";
import "../styles/css/misc/home.css";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import { Redirect } from "react-router-dom";

class HomeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      functionalities: [{ name: "Archivos", photo: faFile, path: "/files" }],
    };
  }

  componentDidMount() {
    if (this.props.currentUser.data.userType === "Admin") {
      this.setState({
        functionalities: [
          { name: "Admin", photo: faTools, path: "/admin" },
          ...this.state.functionalities,
        ],
      });
    }
  }
  render() {
    if (this.props.currentUser.data.userType !== "Admin") {
      return <Redirect to="/files" />;
    }
    return (
      <Fragment>
        <div className="func-container">
          {this.state.functionalities.map((item, index) => (
            <Functionality key={index} func={item} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default WithAuthConsumer(HomeSearch);
