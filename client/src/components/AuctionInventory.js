import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";
import Header from "./Header";
import bannerImg from "../bannerImage";
import Footer from "./Footer";

class AuctionInventory extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    const request = async () => {
      const response = await fetch("/cars/auction");
      const cars = await response.json();
      this.setState({ cars });
      let carStats = cars.map(stats => {
        if (stats.sold) {
          return (
            <div
              className=""
              key={stats._id}
              className="col-xs-12 col-sm-6 col-md-4">
              <div
                style={{
                  color: "#213461",
                  border: "solid #213461 1px",
                  fontFamily: "Fira Sans",
                  paddingBottom: "20px",
                  "box-shadow": "2px 2px 2px lightGrey"
                }}
                className="thumbnail">
                <div style={{ textAlign: "right" }}>
                  <h4>SOLD</h4>
                </div>
                <Link to={"/inventory/" + stats._id}>
                  <img
                    alt="sold"
                    className="banner"
                    src={bannerImg}
                    style={{
                      width: "30%",
                      position: "absolute",
                      transform: "rotate(270deg)"
                    }}
                  />
                  <img
                    style={{ height: "200px", "object-fit": "contain" }}
                    src={stats.files[0].base64}
                    alt="car"
                  />
                  <div style={{ color: "#213461" }} className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                  <div style={{ color: "#213461" }} className="caption">
                    <h6>VIN: {stats.vin}</h6>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    Apply for Credit
                  </a>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href="/contactUs"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    Check Availability
                  </a>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href={"/inventory/" + stats._id}
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={stats._id} className="col-xs-12 col-sm-6 col-md-4">
              <div
                style={{
                  color: "#213461",
                  border: "solid #213461 1px",
                  fontFamily: "Fira Sans",
                  paddingBottom: "20px",
                  "box-shadow": "2px 2px 2px lightGrey"
                }}
                className="thumbnail">
                <div style={{ textAlign: "right" }}>
                  <h4>{"$" + stats.price}</h4>
                </div>
                <Link to={"/inventory/" + stats._id}>
                  <img
                    style={{ height: "200px", "object-fit": "contain" }}
                    src={stats.files[0].base64}
                    alt="car"
                  />
                  <div style={{ color: "#213461" }} className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                  <div style={{ color: "#213461" }} className="caption">
                    <h6>VIN: {stats.vin}</h6>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    Apply for Credit
                  </a>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href="/contactUs"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    Check Availability
                  </a>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid #213461 1px",
                    marginTop: "8px",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                  <a
                    href={"/inventory/" + stats._id}
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "#213461"
                    }}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        }
      });
      this.setState({ carStats });
    };
    request();
  }

  render() {
    return (
      <div>
        <div
          className="inventory"
          style={{
            paddingTop: "15px",
            borderTop: "1px solid #213461"
          }}>
          <div>
            <Grid style={{ "min-height": "75vh" }}>
              <div className="row">{this.state.carStats}</div>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AuctionInventory);
