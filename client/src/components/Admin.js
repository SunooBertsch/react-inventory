import React, { Component } from "react";
import AdminForm from "./AdminForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import CurrentInventory from "./CurrentInventory";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    console.log("data", data);
    this.props.handleForm(data);
  }
  render() {
    return (
      <div class="row">
        <CurrentInventory class="col s1" />
        <AdminForm class="col s11" onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, actions)(Admin);
