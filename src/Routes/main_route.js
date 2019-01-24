import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "../Register/register_form";
import Login from "../Login/login";
class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>    
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
