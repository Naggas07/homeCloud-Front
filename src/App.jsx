import React from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import AuthenticatedRoute from "./components/misc/autenticathedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <AuthenticatedRoute exact path="/home">
          <Home />
        </AuthenticatedRoute>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
