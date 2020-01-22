import React from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";

export default class Register extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let object = e.target.getElementsByTagName("input");
    let data = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        data[object[key].name] = object[key].value;
      }
    }
    api.Register(data, result => {
      console.log(result, "result");
    });
  }

  render() {
    if(localStorage.getItem('token')!==null){
      this.props.history.push('/');
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputLName">Last Name</label>
            <input
              name="lName"
              type="text"
              className="form-control"
              id="inputLName"
              placeholder="Enter last name"
              required
            />
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
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputUserName">Username</label>
            <input
              name="userName"
              type="text"
              className="form-control"
              id="inputUserName"
              placeholder="Enter user name"
              autoComplete='on'
              required
            />
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
