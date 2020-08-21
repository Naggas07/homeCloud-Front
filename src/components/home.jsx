import React, { Component, Fragment } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./misc/navbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <h1>Hola</h1>
      </Fragment>
    );
  }
}

export default Home;
