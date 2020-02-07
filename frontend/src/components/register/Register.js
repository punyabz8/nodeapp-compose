import React from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import validate from '../../validation/validate';

import './style.css';

export default class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      fieldErr: {
        errEmail: '',
        errFName: '',
        errLName: '',
        errPassword: '',
        errRePassword: '',
        errUserName: ''
      },
      fieldData: {
        email: '',
        fName: '',
        lName: '',
        password: '',
        rePassword: '',
        userName: ''
      }
    }
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
    validate.validateForm(data, (validationSuccess, message) =>{
      if(validationSuccess === true){
        this.setState({fieldData: data});
        this.setState({fieldErr: message});
        delete data.rePassword;
        api.Register(data, result => {
          if(result.status === 200){
            this.props.history.push('/api/user/login');
          }
        });
      } else {
        this.setState({fieldErr: message});
      }
    })
  }

  render() {

    if (localStorage.getItem("token") !== null) {
      this.props.history.push("/");
    }

    return (
      <div className="form-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="inputFName">First Name</label>
            <input
              name="fName"
              type="text"
              className="form-control"
              id="inputFName"
              placeholder="Enter first name"
              defaultValue = { this.state.fieldData.fName }
              required
            />
            <i>{this.state.fieldErr.errFName}</i>
          </div>
          <div className="form-group">
            <label htmlFor="inputLName">Last Name</label>
            <input
              name="lName"
              type="text"
              className="form-control"
              id="inputLName"
              placeholder="Enter last name"
              defaultValue = {this.state.fieldData.lName}
              required
            />
            <i>{this.state.fieldErr.errLName}</i>
          </div>

          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              defaultValue = {this.state.fieldData.email}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            {this.state.fieldErr.errEmail}
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
              defaultValue = {this.state.fieldData.password}
              required
            />
            <i>{this.state.fieldErr.errPassword}</i>
          </div>
          <div className="form-group">
            <label htmlFor="reInputPassword">Re-enter Password</label>
            <input
              name="rePassword"
              type="password"
              className="form-control"
              id="reInputPassword"
              placeholder="Enter password again."
              autoComplete="on"
              defaultValue = {this.state.fieldData.rePassword}
              required
            />
            <i>{this.state.fieldErr.errRePassword}</i>
          </div>
          <div className="form-group">
            <label htmlFor="inputUserName">Username</label>
            <input
              name="userName"
              type="text"
              className="form-control"
              id="inputUserName"
              placeholder="Enter user name"
              autoComplete="on"
              defaultValue = {this.state.fieldData.userName}
              required
            />
            <i>{this.state.fieldErr.errUserName}</i>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <Link to="/api/user/login">
            <button type="botton" className="btn btn-primary">
              Already have account
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
