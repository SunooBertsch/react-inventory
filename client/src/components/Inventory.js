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
          <Grid>
            <div className="row">{this.state.carStats}</div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
