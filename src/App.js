import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./Routes/main_route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <MainRoute />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
