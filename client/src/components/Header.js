import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "90px"
        }}>
        <div className="col-xs-12 visible-xs-block">
          <div style={{ marginTop: "20px" }}>
            <Link to={"/"}>
              <img
                src="https://i.imgur.com/L5Uu1Rf.png"
                alt="Fast Turtle Motors"
                style={{ maxWidth: "75px", marginTop: "-17px" }}
              />
            </Link>
            <div style={{ position: "relative", float: "right" }}>
              <div className="dropdown">
                <ButtonToolbar>
                  <DropdownButton
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
                  </DropdownButton>
                </ButtonToolbar>
              </div>
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
        <div style={{ paddingRight: "0" }} className="col-sm-8 hidden-xs">
          <div style={{ marginTop: "0px", textAlign: "center" }}>
            <Link
              style={{
                maxWidth: "200px",
                marginLeft: "0%",
                fontFamily: "Fira Sans",
                fontSize: "16pt",
                color: "#213159"
              }}
              to={"/"}>
              <img
                src="https://i.imgur.com/L5Uu1Rf.png"
                alt="Fast Turtle Motors"
                style={{
                  maxWidth: "75px",
                  position: "relative",
                  float: "left"
                }}
              />
            </Link>
          </div>
          <div
            style={{
              marginTop: "32px",
              fontSize: "18px",
              color: "#213159",
              marginLeft: "90px"
            }}>
            <Link
              style={{ color: "#213159", paddingRight: "5px" }}
              to={"/inventory"}>
              INVENTORY
            </Link>
            <span style={{ color: "#213159" }}> | </span>
            <Link
              style={{ color: "#213159", paddingLeft: "5px" }}
              to={"/auctions"}>
              AUCTIONS
            </Link>
            <span style={{ color: "#213159" }}> | </span>
            <Link
              style={{ color: "#213159", paddingLeft: "5px" }}
              to={"/auctions"}>
              CREDIT OPTIONS
            </Link>
            <span style={{ color: "#213159" }}> | </span>
            <Link
              style={{ color: "#213159", paddingLeft: "5px" }}
              to={"/auctions"}>
              CONTACT US
            </Link>
            <span style={{ color: "#213159" }}> | </span>
            <Link
              style={{ color: "#213159", paddingLeft: "5px" }}
              to={"/auctions"}>
              ABOUT US
            </Link>
          </div>
        </div>
        <div
          className="col-sm-4 hidden-xs"
          style={{
            marginTop: "20px"
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
