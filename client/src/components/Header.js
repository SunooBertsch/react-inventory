import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderDropdown() {
    return (
      <ul style={{ color: "white" }} className="right">
        <a
          className="dropdown-button navbar-btn show-on-small"
          href="#"
          data-activates="dropdown1"
        >
          <i className="material-icons">dehaze</i>
        </a>
        <ul id="dropdown1" className="left dropdown-content">
          <li className="left">
            <a className="left-align" href="/inventory">
              Inventory
            </a>
          </li>
          <li className="left">
            <a className="left-align" href="/auth/google">
              Login
            </a>
          </li>
        </ul>
      </ul>
    );
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
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
        <div style={{ backgroundColor: "#004d40" }} className="nav-wrapper">
          <row>
            <div className="left" m={6} xs={6}>
              <Link
                style={{
                  "max-width": "200px",
                  "margin-left": "0.8em",
                  "font-style": "italic"
                }}
                to={"/"}
                className="left flow-text italic"
              >
                Fast Turtle Motors
              </Link>
            </div>
            <div className="hide-on-small-only">{this.renderContent()}</div>
            <div className="hide-on-med-and-up show-on-small">
              {this.renderDropdown()}
            </div>
          </row>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
