import React from "react";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import NoPage from "../page-not-found/NoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route
            path="/api/user/login"
            exact
            strict
            render={routerProps => <Login {...routerProps} />}
          />
          <Route
            path="/api/user/register"
            exact
            strict
            render={routerProps => <Register {...routerProps} />}
          />
          <Route component={NoPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
