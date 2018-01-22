import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";

class CurrentInventory extends Component {
  constructor(props) {
    super(props);
    this.toggleSoldButton = this.toggleSoldButton.bind(this);
    this.toggleAuctionSoldButton = this.toggleAuctionSoldButton.bind(this);
    this.renderAuctionList = this.renderAuctionList.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  toggleSoldButton(car) {
    if (car.sold === false) {
      return (
        <button
          class="btn btn-primary"
          key={car._id}
          onClick={() => this.props.soldInventory(car._id)}>
          Mark Sold
        </button>
      );
    } else {
      return (
        <button
          class="btn btn-success"
          key={car._id}
          onClick={() => this.props.soldInventory(car._id)}>
          Mark Avail
        </button>
      );
    }
  }

  toggleAuctionSoldButton(car) {
    if (car.sold === false) {
      return (
        <button
          class="btn btn-primary"
          key={car._id}
          onClick={() => this.props.soldAuctionInventory(car._id)}>
          Mark Sold
        </button>
      );
    } else {
      return (
        <button
          class="btn btn-success"
          key={car._id}
          onClick={() => this.props.soldAuctionInventory(car._id)}>
          Mark Avail
        </button>
      );
    }
  }

  renderAuctionList(inventory) {
    if (inventory) {
      const list = inventory.map((car, i) => {
        return (
          <div
            style={{
              width: "100%",
              height: "40px",
              border: "solid black 1px",
              "border-radius": "3px",
              marginTop: "2px",
              fontSize: "12px",
              backgroundColor: "#e7e7e7"
            }}
            key={car._id}>
            <label style={{ width: "40%", padding: "10px 0 0 3px" }}>
              {car.make + " " + car.model + " " + car.year}
            </label>
            <div
              style={{
                float: "right",
                paddingTop: "2px",
                paddingRight: "2px"
              }}>
              <button
                class="btn btn-danger"
                style={{ marginRight: "2px" }}
                onClick={() => this.props.deleteAuctionInventory(car._id)}>
                Delete
              </button>
              {this.toggleAuctionSoldButton(car)}
            </div>
          </div>
        );
      });
      return list;
    } else {
      return <div />;
    }
  }

  renderList(inventory) {
    if (inventory) {
      const list = inventory.map((car, i) => {
        return (
          <div
            style={{
              width: "100%",
              height: "40px",
              border: "solid black 1px",
              "border-radius": "3px",
              marginTop: "2px",
              fontSize: "12px",
              backgroundColor: "#e7e7e7"
            }}
            key={car._id}>
            <label style={{ width: "40%", padding: "10px 0 0 3px" }}>
              {car.make + " " + car.model + " " + car.year}
            </label>
            <div
              style={{
                float: "right",
                paddingTop: "2px",
                paddingRight: "2px"
              }}>
              <button
                class="btn btn-danger"
                style={{ marginRight: "2px" }}
                onClick={() => this.props.deleteInventory(car._id)}>
                Delete
              </button>
              {this.toggleSoldButton(car)}
            </div>
          </div>
        );
      });
      return list;
    } else {
      return <div />;
    }
  }

  render() {
    console.log();
    if (this.props.inventory) {
      return (
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-xs-12 col-sm-6 justify-content-center">
            <label
              style={{
                color: "#e7e7e7",
                marginTop: "20px",
                "font-family": "Century Gothic, sans-serif"
              }}>
              Sale Inventory
            </label>
            <div className="col">
              <ul
                style={{
                  width: "100%",
                  height: "auto",
                  "max-height": "400px",
                  "border-radius": "3px",
                  padding: "0",
                  overflow: "scroll"
                }}>
                {this.renderList(this.props.inventory.inventory)}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <label style={{ color: "#e7e7e7", marginTop: "20px" }}>
              Auction Inventory
            </label>
            <ul
              style={{
                width: "100%",
                height: "auto",
                "max-height": "400px",
                "border-radius": "3px",
                padding: "0",
                overflow: "scroll"
              }}>
              {this.renderAuctionList(this.props.inventory.auctionInventory)}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div>a</div>;
    }
  }
}

function mapStateToProps({ inventory }) {
  console.log("inventory in admin", inventory);
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(CurrentInventory);
