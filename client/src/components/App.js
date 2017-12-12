import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Admin from "./Admin";
import Inventory from "./Inventory";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getInventory();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/inventory" component={Inventory} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
