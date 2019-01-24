import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterForm from "./register_form";

class RegisterRoute extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={RegisterForm} />
      </Router>
    );
  }
}

export default RegisterRoute;
