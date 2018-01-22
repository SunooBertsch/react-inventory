import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";
import Header from "./Header";
import bannerImg from "../bannerImage";

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
        console.log(stats.sold);
        if (stats.sold) {
          return (
            <div className="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-6 col-md-4">
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img className="banner" src={bannerImg} alt="sold" />
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid grey 1px",
                    backgroundColor: "#213159"
                  }}>
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "white"
                    }}>
                    Apply for Credit
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-6 col-md-4">
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid grey 1px",
                    backgroundColor: "#213159"
                  }}>
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "white"
                    }}>
                    Apply for Credit
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
        <Header />
        <div className="inventory" style={{ paddingTop: "15px" }}>
          <div>
            <Grid style={{ "min-height": "75vh" }}>
              <div className="row justify-content-center">
                {this.state.carStats}
              </div>
            </Grid>
          </div>
          <div
            className="bottomInfo"
            style={{
              borderTop: "1px solid grey",
              paddingBottom: "10px",
              backgroundColor: "#e7e7e7",
              color: "#213159"
            }}
          >
            <div className="row" style={{ marginLeft: "15px" }}>
              <div className="col-sm-4" style={{}}>
                <h4>About Us</h4>
              </div>
              <div className="col-sm-4" style={{}}>
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>Phone: (714) 987-1661</li>
                  <li>Email: info@fastturtlemotors.com</li>
                </ul>
              </div>
              <div className="col-sm-4" style={{}}>
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/FastTurtleMotors/">
                  <i
                    className="fa fa-facebook"
                    aria-hidden="true"
                    style={{ color: "#213159" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AuctionInventory);
