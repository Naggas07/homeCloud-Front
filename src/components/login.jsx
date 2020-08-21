import React, { Component } from "react";
import "../styles/css/login.css";
import logo from "../styles/images/cloud-icon.png";
import { WithAuthConsumer } from "../context/auth.context";
import { Redirect } from "react-router-dom";
import userServices from "../services/user.services";

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

  handleSubmit = (event) => {
    event.preventDefault();

    const { userData } = this.state;

    this.setState({ loading: true, error: false }, () => {
      userServices
        .login(userData)
        .then((user) => {
          this.props.setUser(user);
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    });
  };

  render() {
    const errorClassName = this.state.error ? "is-invalid" : "";

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
            <form className="form-margins" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className={`form-control ${errorClassName}`}
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
                  className={`form-control ${errorClassName}`}
                  name="password"
                  value={this.state.userData.password}
                  onChange={this.handleChange}
                  autoComplete="off"
                  placeholder="Contraseña"
                />
                <div className="invalid-feedback padding-0">
                  Usuario/Contraseña erroneos
                </div>
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
