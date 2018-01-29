import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "90px",
          fontFamily: "Open Sans",
          boxShadow: "0px 4px 12px lightGrey"
        }}
      >
        <div className="col-xs-12 d-sm-none">
          <div style={{}}>
            <Link to={"/"}>
              <img
                src="http://i.cubeupload.com/MAVf48.png"
                alt="Fast Turtle Motors"
                style={{
                  width: "auto",
                  height: "90px"
                }}
              />
            </Link>
            <div style={{ position: "relative", float: "right" }}>
              <div style={{ marginTop: "19px" }} className="dropdown">
                <button
                  className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "white" }}
                >
                  <i
                    style={{
                      position: "relative",
                      color: "#525c65",

                      marginTop: "-4px"
                    }}
                    className="fa fa-bars fa-3x"
                  />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to={"/inventory"}>
                    Inventory
                  </Link>
                  <Link className="dropdown-item" to={"/auctions"}>
                    Auctions
                  </Link>
                </div>
              </div>
            </div>
            <a
              style={{
                marginTop: "21px",
                color: "#525c65",
                position: "relative",
                float: "right"
              }}
              href="tel:7149871661"
            >
              <i
                style={{
                  position: "relative",
                  marginRight: "10px",
                  marginTop: "3px"
                }}
                className="fa fa-mobile-phone fa-3x"
              />
            </a>
          </div>
        </div>
        <div
          style={{ paddingRight: "0" }}
          className="col-sm-8 d-none d-sm-block"
        >
          <div style={{ marginTop: "0px", textAlign: "center" }}>
            <Link
              style={{
                maxWidth: "200px",
                marginLeft: "0%",
                fontFamily: "Open Sans",
                fontSize: "16px",
                color: "dark grey"
              }}
              to={"/"}
            >
              <img
                src="http://i.cubeupload.com/MAVf48.png"
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
              color: "#525c65"
            }}
          >
            <Link
              style={{ color: "#525c65", paddingRight: "5px" }}
              to={"/inventory"}
            >
              INVENTORY
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/auctions"}
            >
              AUCTIONS
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/preapproval"}
            >
              GET PRE-QUALIFIED
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/applyCredit"}
            >
              APPLY FOR CREDIT
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/auctions"}
            >
              CONTACT US
            </Link>
            <span style={{ color: "#525c65" }}> | </span>
            <Link
              style={{ color: "#525c65", paddingLeft: "5px" }}
              to={"/auctions"}
            >
              ABOUT US
            </Link>
          </div>
        </div>
        <div
          className="col-sm-4 d-none d-sm-block"
          style={{
            marginTop: "20px"
          }}
        >
          <div className="row">
            <div className="col-sm-12">
              <div
                style={{
                  position: "relative",
                  float: "right",
                  color: "#213159",
                  fontFamily: "Open Sans",
                  fontSize: "12px"
                }}
              >
                (714) 987-1661
              </div>
              <div
                style={{
                  color: "#213159",
                  position: "relative",
                  float: "right"
                }}
              >
                <i style={{ marginRight: "5px" }} className="fa fa-phone" />
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
                }}
              >
                info@fastturtlemotors.com
              </div>

              <div
                style={{
                  color: "#213159",
                  position: "relative",
                  float: "right"
                }}
              >
                <i style={{ marginRight: "5px" }} className="fa fa-envelope" />
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
