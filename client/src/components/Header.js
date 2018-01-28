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
          height: "90px",
          fontFamily: "Open Sans",
          "box-shadow": "0px 4px 12px lightGrey"
        }}>
        <div className="col-xs-12 visible-xs-block">
          <div style={{ marginTop: "20px" }}>
            <Link to={"/"}>
              <img
                src="/Fast_Turtle_Logo.jpg"
                alt="Fast Turtle Motors"
                style={{
                  width: "auto",
                  height: "60px"
                }}
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
                          color: "#525c65",
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
                color: "#525c65",
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
                fontFamily: "Open Sans",
                fontSize: "16px",
                color: "dark grey"
              }}
              to={"/"}>
              <img
                src="/Fast_Turtle_Logo.jpg"
                alt="Fast Turtle Motors"
                style={{
                  width: "auto",
                  height: "65px",
                  margin: "16px",
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
              color: "#525c65",
              marginLeft: "90px"
            }}>
            <Link
              style={{ color: "#525c65", paddingRight: "5px" }}
              to={"/inventory"}>
              INVENTORY
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/auctions"}>
              AUCTIONS
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/preapproval"}>
              GET PRE-QUALIFIED
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/applyCredit"}>
              APPLY FOR CREDIT
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/auctions"}>
              CONTACT US
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
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
                  color: "#213159",
                  fontFamily: "Open Sans",
                  fontSize: "12px"
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
                  float: "right",
                  fontFamily: "Open Sans",
                  fontSize: "12px"
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
