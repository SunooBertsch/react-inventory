import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, Col } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import VehicleCard from "./VehicleCard";

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
        return (
          <Col key={stats._id} xl={2} l={4} m={6} s={10} xs={12}>
            <Card
              className="small"
              header={
                <CardTitle image="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg">
                  {}
                </CardTitle>
              }
              actions={[<Link to={"/inventory/" + stats._id}>More</Link>]}
            >
              {stats.make + " " + stats.model}
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
      <div className="container">
        <div className="inventory">
          <h1>Inventory</h1>
          <div className="row">{this.state.carStats}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
