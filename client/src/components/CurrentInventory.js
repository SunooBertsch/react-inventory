import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";

const InventoryContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: "builds form";
  grid-gap: 1rem;
  padding-top: 1.5rem;
`;

const SingleCar = styled.li`
  border: solid black 1px;
  text-align: center;
`;

class CurrentInventory extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInventory();
  }

  renderList(inventory) {
    const list = inventory.map((car, i) => {
      return (
        <SingleCar key={i}>
          {car.make + " " + car.model + " " + car.year}
        </SingleCar>
      );
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

function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(CurrentInventory);
