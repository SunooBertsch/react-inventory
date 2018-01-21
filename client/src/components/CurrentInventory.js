import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";

class CurrentInventory extends Component {
  constructor(props) {
    super(props);
    this.toggleSoldButton = this.toggleSoldButton.bind(this);
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

  renderList(inventory) {
    const list = inventory.map((car, i) => {
      return (
        <div
          style={{
            width: "100%",
            height: "40px",
            border: "solid black 1px",
            marginTop: "2px"
          }}
          key={car._id}>
          <label style={{ width: "40%", padding: "8px 0 0 3px" }}>
            {car.make + " " + car.model + " " + car.year}
          </label>
          <div
            style={{ float: "right", paddingTop: "2px", paddingRight: "2px" }}>
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
  }

  render() {
    if (this.props.inventory.inventory) {
      return (
        <div>
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
      );
    } else {
      return <div>a</div>;
    }
  }
}

function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(CurrentInventory);
