import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";
import Header from "./Header";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

class Auctions extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
  }
  componentDidMount() {
    const request = async () => {
      const response = await fetch("/car-auctions");
      const cars = await response.json();
      this.setState({ cars });
      let carStats = cars.map(stats => {
        return (
          <Col xs={6} md={4}>
            <Thumbnail src={stats.files[0].base64} alt="car">
              <h4>
                {stats.year} {stats.make} {stats.model} {stats.trimLevel}
              </h4>
              <Link to={"/car-auctions/" + stats._id}>More</Link>
            </Thumbnail>
          </Col>
        );
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
            <Row>{this.state.carStats}</Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Auctions);
