import React, { Component } from "react";
import Header from "./Header";

class Authentication extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div style={{ height: "200px", width: "100%" }} />
          <a className="btn btn-primary" href="/auth/google">
            Login with Google
          </a>
        </div>
      </div>
    );
  }
}

export default Authentication;
