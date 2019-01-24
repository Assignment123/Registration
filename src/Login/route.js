import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";

class Login extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default Login;
