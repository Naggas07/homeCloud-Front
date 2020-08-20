import React, { Component } from "react";
import "../styles/css/login.css";
import logo from "../styles/images/cloud-icon.png";
import { WithAuthConsumer } from "../context/auth.context";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: "",
        password: "",
      },
      error: false,
      loading: false,
      success: false,
    };
  }

  handleChange = (event) => {
    const { name, value, files } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: files ? files[0] : value,
      },
    });
  };
  render() {
    if (this.props.currentUser) {
      return <Redirect to="/home" />;
    }
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
                  value={this.state.userData.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.userData.password}
                  onChange={this.handleChange}
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

export default WithAuthConsumer(Login);
