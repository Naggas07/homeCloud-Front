import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import AuthenticatedRoute from "./components/misc/autenticathedRoute";
import NavBar from "./components/misc/navbar";
import { WithAuthConsumer } from "./context/auth.context";
import Admin from "./components/Admin";
import Files from "./components/Files";
import FolderHome from "./components/FolderHome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <AuthenticatedRoute exact path="/home">
          <Home />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/Admin">
          <Admin />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/files">
          <Files />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/folders">
          <FolderHome />
        </AuthenticatedRoute>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default WithAuthConsumer(App);
