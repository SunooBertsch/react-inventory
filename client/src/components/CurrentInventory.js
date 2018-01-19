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
    console.log("carid", car._id);
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
    console.log("INVENTORY", inventory);
    const list = inventory.map((car, i) => {
      return (
        <div key={car._id}>
          <label>{car.make + " " + car.model + " " + car.year}</label>
          <button
            class="btn btn-danger"
            onClick={() => this.props.deleteInventory(car._id)}>
            Delete
          </button>
          {this.toggleSoldButton(car)}
        </div>
      );
    });
    return list;
  }

  render() {
    if (this.props.inventory.inventory) {
      return (
        <div>
          <ul style={{ width: "100%" }}>
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
