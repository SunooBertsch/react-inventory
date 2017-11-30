import React, { Component } from "react";
import AdminPortal from "./AdminPortal";
import { Route, Router } from "react-router";
import { history } from "../index";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/admin" component={AdminPortal} />
        </div>
      </Router>
    );
  }
}

export default App;
