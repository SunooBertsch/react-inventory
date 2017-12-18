import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(event) {
    console.log(this.props);
    const contactNode = ReactDOM.findDOMNode(this.props.refs.contact);
    window.scrollTo(0, contactNode.offsetTop);
  }
  renderDropdown() {
    return (
      <ul style={{ color: "white" }} className="right">
        <a
          className="dropdown-button navbar-btn hidden-md-up"
          href="#"
          data-activates="dropdown1"
          below-origin="true"
        >
          <i className="material-icons">dehaze</i>
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="/inventory">
              <i className="materialize-icons">Inventory</i>
            </a>
          </li>
          <li>
            <a href="/auth/google">
              <i className="materialize-icons">Login</i>
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
      <div
        className="row"
        style={{ width: "100%", height: "65px", backgroundColor: "#004d40" }}
      >
        <div className="col-xs-8">
          <div style={{ marginTop: "18px" }}>
            <Link
              style={{
                maxWidth: "200px",
                marginLeft: "1.5em",
                fontStyle: "italic",
                fontSize: "16pt",
                color: "white"
              }}
              to={"/"}
            >
              Fast Turtle Motors
            </Link>
          </div>
        </div>
        <div className="col-xs-4">
          <div
            style={{ position: "relative", float: "right", marginTop: "20px" }}
          >
            <a style={{ color: "white" }} href="tel:9496162923">
              <i style={{ "margin-right": "0.8em" }} className="material-icons">
                call
              </i>
            </a>
            <a
              style={{ color: "white" }}
              href="mailto:recyclingimports@gmail.com"
            >
              <i style={{ "margin-right": "0.8em" }} className="material-icons">
                email
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
