import React, { Component } from "react";

class Authentication extends Component {
  render() {
    return (
      <div style={{ height: "70vh",
      "box-shadow": "0px 2px 12px lightGrey" }}>
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
