import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Admin from "./Admin";
import Inventory from "./Inventory";
import VehicleCard from "./VehicleCard";
import AuctionInventory from "./AuctionInventory";
import Authentication from "./Authentication";
import AdminPath from "./AdminPath";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getInventory();
  }

  render() {
    return (
      <div
        className="container"
        style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/authentication" component={Authentication} />
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={VehicleCard} />
            <Route exact path="/auctions" component={AuctionInventory} />
            <AdminPath />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
