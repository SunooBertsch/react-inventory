import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";
import Header from "./Header";
import bannerImg from "../bannerImage";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

class Inventory extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
  }
  componentDidMount() {
    const request = async () => {
      const response = await fetch("/cars");
      const cars = await response.json();
      this.setState({ cars });
      let carStats = cars.map(stats => {
        console.log(stats.sold);
        if (stats.sold) {
          return (
            <div className="col-xs-offset-1 col-xs-10 col-md-4">
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img className="banner" src={bannerImg} />
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          );
        } else {
          return (
            <div className="col-xs-offset-1 col-xs-10 col-md-4">
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                </Link>
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
          <Grid style={{ "min-height": "600px" }}>
            <div className="row">{this.state.carStats}</div>
          </Grid>
          <div
            className="bottomInfo"
            style={{
              borderTop: "1px solid grey",
              paddingBottom: "10px",
              backgroundColor: "#e7e7e7",
              color: "#213159"
            }}>
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

export default connect(null, actions)(Inventory);
