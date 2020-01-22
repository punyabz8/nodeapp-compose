import React from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import { validateForm } from "../../validation/validate";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let object = e.target.getElementsByTagName("input");
    let data = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        data[object[key].name] = object[key].value;
      }
    }
    validateForm(data, message => {
      if (Object.getOwnPropertyNames(message).length === 0) {
        api.login(data, result => {
          console.log("Server data on login", result);
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("user", JSON.stringify(result.data.userData));
          this.props.history.push("/");
        });
      } else {
        console.log("Front End validation message :", message);
      }
    });
  }

  render() {
    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/");
      this.setState({ isLoggedIn: true });
    }
    return (
      <div className="form-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              autoComplete="on"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/api/user/register">
            <button type="botton" className="btn btn-primary">
              Don't have an account
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
