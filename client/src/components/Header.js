import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ boxShadow: "0px 4px 12px lightGrey" }}
      >
        <Link className="navbar-brand" to={"/"}>
          <img
            src="http://i.cubeupload.com/dPDmaf.png"
            alt="Fast Turtle Motors"
            style={{ height: "90px" }}
          />
        </Link>
        <a
          href="tel:7149871661"
          className="navbar-toggler "
          style={{
            width: "56px",
            height: "40px",
            position: "absolute",
            right: "82px"
          }}
        >
          <i
            className="fa fa-mobile-phone fa-2x"
            style={{ marginLeft: "6.43px", marginTop: "-5px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{ fontFamily: "Roboto" }}>
            <Link
              className="nav-item nav-link"
              to={"/inventory"}
              style={{ color: "#213461" }}
            >
              Inventory
            </Link>
            <Link
              className="nav-item nav-link"
              to={"/auctions"}
              style={{ color: "#213461" }}
            >
              Auctions
            </Link>
            <Link
              className="nav-item nav-link"
              to={"/preapproval"}
              style={{ color: "#213461" }}
            >
              Get Pre-Qualified
            </Link>
            <Link
              className="nav-item nav-link"
              to={"/applyCredit"}
              style={{ color: "#213461" }}
            >
              Apply For Credit
            </Link>
            <Link
              className="nav-item nav-link"
              to={"/contact"}
              style={{ color: "#213461" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div
          className="row collapse navbar-collapse"
          style={{ fontFamily: "Roboto", color: "#213461", width: "200px" }}
        >
          <div className="col-12 text-right">
            <i style={{ marginRight: "5px" }} className="fa fa-envelope" />
            info@fastturtlemotors.com
          </div>
          <div className="col-12 text-right">
            <i style={{ marginRight: "5px" }} className="fa fa-phone" />
            (714) 987-1661
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
