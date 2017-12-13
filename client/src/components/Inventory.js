import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, Col } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import VehicleCard from "./VehicleCard";
import styled from "styled-components";

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
        console.log("stats", stats);
        return (
          <Col key={stats._id} xl={4} l={6} m={6} s={12} xs={12}>
            <Card
              className="small"
              actions={[<Link to={"/inventory/" + stats._id}>More</Link>]}>
              {stats.make + " " + stats.model}

              <div>
                <Image src={stats.files[0].base64} />
              </div>
            </Card>
          </Col>
        );
      });
      this.setState({ carStats });
    };
    request();
  }

  render() {
    return (
      <div className="inventory">
        <div className="row">{this.state.carStats}</div>
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
