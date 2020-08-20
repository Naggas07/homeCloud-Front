import React, { Component } from "react";
import "../styles/css/login.css";
import logo from "../styles/images/cloud-icon.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="loginBack">
        <div className="login-container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3 className="tittle-text">myCloud</h3>
          </div>
          <div className="form login-font">
            <form className="form-margins">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  autoComplete="off"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  autoComplete="off"
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn btn-block primary-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
