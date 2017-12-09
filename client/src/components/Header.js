import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Checking authentication";
      case false:
        return (
          <ul className="right">
            <li key="3" style={{ margin: "0 10px 0 15px" }}>
              <a href="/inventory">Inventory</a>
            </li>
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li key="3" style={{ margin: "0 10px 0 15px" }}>
              <a href="/inventory">Inventory</a>
            </li>
            <li key="2">
              <a className="right" href="/api/logout">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={"/"} className="left brand-logo">
            Project Cars
          </Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
