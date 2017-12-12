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
    fetch("/cars")
      .then(res => {
        return res.json();
      })
      .then(cars => {
        this.setState({ cars });
        let carStats = cars.map((stats, i) => {
          const id = stats._id;
          return (
            <Col key={id} xl={2} l={4} m={6} s={10}>
              <Card
                key={id}
                className="small"
                header={
                  <CardTitle
                    key={id}
                    image="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg"
                  />
                }
                actions={[
                  <Link key={id} to={"/inventory" + stats._id}>
                    More
                  </Link>
                ]}>
                {stats.make + " " + stats.model}
              </Card>
            </Col>
          );
        });
        this.setState({ carStats });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="inventory">
          <div className="row">{this.state.carStats}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
