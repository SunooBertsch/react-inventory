import React, { Component } from "react";
import AdminForm from "./AdminForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AdminForm
          handleSubmit={data => {
            this.props.handleForm(data);
          }}
        />
      </div>
    );
  }
}

export default connect(null, actions)(Admin);
