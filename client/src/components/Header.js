import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
          width: "100%",
          height: "90px",
          fontFamily: "Open Sans",
          marginLeft: "0",
          marginRight: "0",
          boxShadow: "0px 4px 12px lightGrey"
        }}
      >
        <div className="d-sm-none" style={{ width: "100%" }}>
          <div className="row">
            <div className="col-4">
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
            </div>
            <div className="col-2 offset-3" style={{ paddingRight: "0" }}>
              <a
                style={{
                  color: "#525c65",
                  position: "relative",
                  float: "right",
                  marginTop: "21px"
                }}
                href="tel:7149871661"
              >
                <i className="fa fa-mobile-phone fa-3x" />
              </a>
            </div>
            <div className="col-3">
              <div style={{ marginTop: "14px" }} className="dropdown">
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
                      color: "#525c65"
                    }}
                    className="fa fa-bars fa-3x"
                  />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to={"/inventory"}>
                    Inventory
                  </Link>
                  <Link className="dropdown-item" to={"/auctions"}>
                    Auctions
                  </Link>
                  <Link className="dropdown-item" to={"/preapproval"}>
                    Get Pre-Qualified
                  </Link>
                  <Link className="dropdown-item" to={"/applyCredit"}>
                    Apply For Credit
                  </Link>
                  <Link className="dropdown-item" to={"/contact"}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ paddingRight: "0" }}
          className="col-sm-10 d-none d-sm-block"
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
                  height: "90px",
                  position: "relative",
                  float: "left"
                }}
              />
            </Link>
          </div>

          <div
            className="row align-items-center"
            style={{
              fontSize: "18px",
              color: "#525c65",
              height: "90px"
            }}
          >
            <div className="col">
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
                to={"/contact"}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-sm-2 d-none d-sm-block"
          style={{ paddingLeft: "0" }}
        >
          <div
            className="row align-items-center text-right"
            style={{
              height: "90px",
              color: "#213159",
              fontFamily: "Open Sans",
              fontSize: "12px"
            }}
          >
            <div
              className="col-sm-12"
              style={{ height: "20px", marginTop: "15px" }}
            >
              <i style={{ marginRight: "5px" }} className="fa fa-phone" />
              (714) 987-1661
            </div>
            <div
              className="col-sm-12"
              style={{ height: "20px", marginBottom: "15px" }}
            >
              <div>
                <i style={{ marginRight: "5px" }} className="fa fa-envelope" />
                info@fastturtlemotors.com
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
