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
        style={{ width: "100%", height: "100px", backgroundColor: "#004d40" }}
      >
        <div className="col-xs-12 visible-xs-block">
          <div style={{ marginTop: "35px" }}>
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
            <a
              style={{
                color: "white",
                position: "relative",
                float: "right"
              }}
              href="tel:7149871661"
            >
              <i
                style={{
                  position: "relative",
                  marginRight: "15px",
                  marginTop: "-10px",
                  fontSize: "50px"
                }}
                className="material-icons"
              >
                call
              </i>
            </a>
          </div>
        </div>
        <div className="col-sm-6 hidden-xs">
          <div style={{ marginTop: "35px" }}>
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
        <div
          className="col-sm-6 hidden-xs"
          style={{
            marginTop: "21px"
          }}
        >
          <div className="row">
            <div className="col-sm-12">
              <div
                style={{
                  position: "relative",
                  float: "right",
                  color: "white"
                }}
              >
                (714) 987-1661
              </div>
              <a
                style={{
                  color: "white",
                  position: "relative",
                  float: "right"
                }}
                href="tel:7149871661"
              >
                <i style={{ marginRight: "5px" }} className="material-icons">
                  call
                </i>
              </a>
            </div>
            <div className="col-sm-12">
              <div
                style={{
                  color: "white",
                  position: "relative",
                  float: "right"
                }}
              >
                info@fastturtlemotors.com
              </div>

              <a
                style={{
                  color: "white",
                  position: "relative",
                  float: "right"
                }}
                href="mailto:info@fastturtlemotors.com"
              >
                <i style={{ marginRight: "5px" }} className="material-icons">
                  email
                </i>
              </a>
            </div>
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
