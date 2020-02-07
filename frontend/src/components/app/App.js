import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


import Home from "../home/Home";
import Login from "../login/login";
import About from "../about/about";
import Header from "../header/header";
import Register from "../register/Register";
import NoPage from "../page-not-found/NoPage";

// import { Route, Switch, Router } from "react-router-dom";
// import history from '../../utils/history';

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const EnhancedLogin = withHeader(Login);
const EnhancedHome = withHeader(Home);
const EnhancedAbout = withHeader(About);
function withHeader(Comp) {
  return function(props) {
    return (
      <>
        <Header {...props} />
        <Comp {...props}/>
      </>
    );
  };
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  changeLoggedInState() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact strict component={routerProps => <EnhancedHome {...routerProps}/>} />
          {/* <Route path="/" exact strict component={routerProps => <Home {...routerProps}/>} /> */}
          <Route
            path="/api/user/login"
            exact
            strict
            component={(routerProps)=><EnhancedLogin {...routerProps}/>  }
          />
          <Route
            path="/api/user/register"
            exact
            strict
            render={routerProps => <Register {...routerProps} />}
          />
          <Route
            path="/about"
            exact
            strict
            render={EnhancedAbout}
          />
          <Route component={NoPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
