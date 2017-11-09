import React, { Component } from "react";
import authentication from "../awsCognitoAuth";
import styled from "styled-components";
import Button from "./Button";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 0 auto;
  width: 90%;
  padding-top: 150px;
  grid-row-gap: 10px;
`;

const GridForm = styled.form`
  display: grid;
  justify-items: center;
  grid-row-gap: 5px;
`;

class Login extends Component {
  state = {
    pw: "",
    email: "",
    login: false
  };

  handleSubmit(e) {
    e.preventDefault();
    // Still need to add forwarding to admin dashboard
  }

  render() {
    return (
      <GridContainer>
        <h1>Admin Login</h1>
        <GridForm>
          <input
            placeholder="Email"
            id="email"
            type="email"
            className="validate"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            placeholder="Password"
            id="password"
            type="password"
            className="validate"
            value={this.state.pw}
            onChange={e => this.setState({ pw: e.target.value })}
          />
          <Button
            onClick={e => {
              this.handleSubmit.bind(this);
              this.handleSubmit(e);
            }}>
            Login
          </Button>
        </GridForm>
      </GridContainer>
    );
  }
}

export default Login;
