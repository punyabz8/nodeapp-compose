import React from "react";
import Axios from "axios";
import * as Constants from "../../constants/constant";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: []
    };
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push("/api/user/login");
  };
  componentDidMount = () => {
    Axios.get(Constants.BASE_URL + Constants.BASE_URL_USER)
      .then(res => {
        this.setState({ userList: res.data.result });
      })
      .catch(err => {
        console.log('From error', err);
      });
  };

  render() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/api/user/login");
    }
    let count = 1;
    let { fName, lName } =
      JSON.parse(localStorage.getItem("user")) || {};
    return (
      <>
        <h2>This is home page</h2>
        <h2>{`Welcome ${fName} ${lName}...`}</h2>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map(user => {
              console.log("user",user)
              return(<tr key = {count}>
                <td>{count++}</td>
                <td>{user.fName + user.lName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>)
            })}
          </tbody>
        </table>
        <button onClick={this.logout}>Logout</button>
      </>
    );
  }
}
