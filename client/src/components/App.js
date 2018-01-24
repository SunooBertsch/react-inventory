import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Admin from "./Admin";
import Inventory from "./Inventory";
import VehicleCard from "./VehicleCard";
import AuctionInventory from "./AuctionInventory";
import AuctionCard from "./AuctionCard";
import Authentication from "./Authentication";
import AdminPath from "./AdminPath";
import PreApproval from "./PreApproval";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getInventory();
    this.props.getAuctionInventory();
  }

  render() {
    return (
      <div
        className="container"
        style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}>
        <BrowserRouter>
        <div>
          <Header />
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/authentication" component={Authentication} />
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={VehicleCard} />
            <Route exact path="/auctions" component={AuctionInventory} />
            <Route path="/auctions/:id" component={AuctionCard} />
            <Route exact path="/preapproval" component={PreApproval} />
            <AdminPath />
          </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
