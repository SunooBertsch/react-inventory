import React, { Component } from "react";
import AdminForm from "./AdminForm";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import CurrentInventory from "./CurrentInventory";

const AdminContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 10fr;
  grid-template-rows: 1fr;
  grid-template-areas: "builds form";
  grid-gap: 1rem;
  padding-top: 1.5rem;
`;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    console.log("component mounted");
    this.props.getInventory();
  }
  handleSubmit(data) {
    console.log("data", data);
    this.props.handleForm(data);
  }
  render() {
    return (
      <AdminContainer class="row">
        <CurrentInventory class="col s1" />
        <AdminForm class="col s11" onSubmit={this.handleSubmit} />
      </AdminContainer>
    );
  }
}
function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}
export default connect(mapStateToProps, actions)(Admin);
