import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CurrentInventory extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getInventory();
    console.log("Props", this.props.inventory);
  }
  renderList(inv) {
    console.log("inv", inv.inventory);
    const inventory = inv.inventory;
    const list = inventory.map((car, i) => {
      console.log("car", car);
      return <li key={i}>{car._id}</li>;
    });
    return list;
  }
  render() {
    console.log("props", this.props.inventory);
    if (this.props.inventory.inventory) {
      console.log("rendering list");
      return <ul>{this.renderList(this.props.inventory.inventory)}</ul>;
    } else {
      return <div>a</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    inventory: state
  };
}

export default connect(mapStateToProps, actions)(CurrentInventory);
