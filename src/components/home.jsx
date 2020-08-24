import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthenticatedRoute from "../components/misc/autenticathedRoute";
import { WithAuthConsumer } from "../context/auth.context";
import "../styles/css/misc/home.css";
import homeSearch from "./homeSearch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <AuthenticatedRoute exact path="/functionalities">
            <homeSearch />
          </AuthenticatedRoute>
          {/* <Redirect to="/functionalities" /> */}
        </Switch>
      </Fragment>
    );
  }
}

export default WithAuthConsumer(Home);
