import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  ButtonToolbar,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

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

  render() {
    return (
      <div
        className="row"
        style={{ width: "100%", height: "70px", backgroundColor: "#e7e7e7" }}>
        <div className="col-xs-12 visible-xs-block">
          <div style={{ marginTop: "20px" }}>
            <Link
              style={{
                maxWidth: "200px",
                marginLeft: "1.2 em",
                fontFamily: "Fira Sans",
                fontSize: "23px",
                color: "#213159"
              }}
              to={"/"}>
              FAST TURTLE MOTORS
            </Link>
            <div style={{ position: "relative", float: "right" }}>
              <ButtonToolbar>
                <DropdownButton
                  bsStyle=""
                  pullRight
                  style={{ backgroundColor: "#e7e7e7" }}
                  title={
                    <i
                      style={{
                        position: "relative",
                        color: "#213159",
                        fontSize: "32px",
                        marginTop: "-4px"
                      }}
                      className="material-icons menu-icon">
                      dehaze
                    </i>
                  }
                  noCaret
                  id="dropdown-no-caret">
                  <MenuItem>
                    <Link to={"/inventory"}>Inventory</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/auctions"}>Auctions</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/preapproval"}>Get Pre-Approved</Link>
                  </MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </div>
            <a
              style={{
                color: "#213159",
                position: "relative",
                float: "right"
              }}
              href="tel:7149871661">
              <i
                style={{
                  position: "relative",
                  marginRight: "10px",
                  marginTop: "3px",
                  fontSize: "30px"
                }}
                className="material-icons">
                call
              </i>
            </a>
          </div>
        </div>
        <div className="col-sm-2 hidden-xs" style={{ position: "relative" }}>
          <ButtonToolbar>
            <DropdownButton
              bsStyle=""
              style={{ backgroundColor: "#e7e7e7" }}
              title={
                <i
                  style={{
                    position: "relative",
                    color: "#213159",
                    fontSize: "32px",
                    marginTop: "10px"
                  }}
                  className="material-icons menu-icon">
                  dehaze
                </i>
              }
              noCaret
              id="dropdown-no-caret">
              <MenuItem>
                <Link to={"/inventory"}>Inventory</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/auctions"}>Auctions</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/preapproval"}>Get Pre-Qualified</Link>
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
        <div className="col-sm-6 hidden-xs">
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Link
              style={{
                maxWidth: "200px",
                marginLeft: "33%",
                fontFamily: "Fira Sans",
                fontSize: "16pt",
                color: "#213159"
              }}
              to={"/"}>
              FAST TURTLE MOTORS
            </Link>
          </div>
        </div>
        <div
          className="col-sm-4 hidden-xs"
          style={{
            marginTop: "8px"
          }}>
          <div className="row">
            <div className="col-sm-12">
              <div
                style={{
                  position: "relative",
                  float: "right",
                  color: "#213159"
                }}>
                (714) 987-1661
              </div>
              <div
                style={{
                  color: "#213159",
                  position: "relative",
                  float: "right"
                }}>
                <i style={{ marginRight: "5px" }} className="material-icons">
                  call
                </i>
              </div>
            </div>
            <div className="col-sm-12">
              <div
                style={{
                  color: "#213159",
                  position: "relative",
                  float: "right"
                }}>
                info@fastturtlemotors.com
              </div>

              <div
                style={{
                  color: "#213159",
                  position: "relative",
                  float: "right"
                }}>
                <i style={{ marginRight: "5px" }} className="material-icons">
                  email
                </i>
              </div>
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
