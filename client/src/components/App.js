import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Admin from "./Admin";
//import Inventory from "./Inventory";
//import VehicleCard from "./VehicleCard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getInventory();
  }

  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
