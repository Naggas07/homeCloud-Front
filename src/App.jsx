import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <p>login</p>
        </Route>
        <Route exact path="/home">
          <p>Home</p>
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
