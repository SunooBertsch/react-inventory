import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Inventory from "./Inventory";
import VehicleCard from "./VehicleCard";
import AuctionInventory from "./AuctionInventory";
import AuctionCard from "./AuctionCard";
import Authentication from "./Authentication";
import AdminPath from "./AdminPath";
import ApplyCredit from "./ApplyCredit";
import PreApproval from "./PreApproval";
import Footer from "./Footer";
import Header from "./Header";
import ContactUs from "./ContactUs";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getInventory();
    this.props.getAuctionInventory();
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "0" }}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/authentication" component={Authentication} />
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={VehicleCard} />
            <Route exact path="/auctions" component={AuctionInventory} />
            <Route path="/auctions/:id" component={AuctionCard} />
            <Route exact path="/applyCredit" component={ApplyCredit} />
            <Route exact path="/preapproval" component={PreApproval} />
            <Route exact path="/contact" component={ContactUs} />
            <AdminPath />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(App);
