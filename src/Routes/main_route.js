import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "../Register/register_form";
import SigninForm from "../Login/signinForm"

class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>    
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={SigninForm} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
