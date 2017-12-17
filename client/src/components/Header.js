import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
          className="dropdown-button navbar-btn show-on-small"
          href="#"
          data-activates="dropdown1"
          below-origin="true">
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
      <nav>
        <div style={{ "background-color": "#004d40" }} className="nav-wrapper">
          <row>
            <div className="left" m={6} xs={6}>
              <Link
                style={{
                  "max-width": "200px",
                  "margin-left": "0.8em",
                  "font-style": "italic"
                }}
                to={"/"}
                className="left flow-text italic">
                Fast Turtle Motors
              </Link>
            </div>
            <div className="right">
              <a className="left" href="tel:9496162923">
                <i
                  style={{ "margin-right": "0.8em" }}
                  className="material-icons">
                  call
                </i>
              </a>
              <a className="right" href="mailto:recyclingimports@gmail.com">
                <i
                  style={{ "margin-right": "0.8em" }}
                  className="material-icons">
                  email
                </i>
              </a>
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
