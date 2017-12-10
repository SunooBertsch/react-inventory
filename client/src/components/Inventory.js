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
        let carStats = cars.map(stats => {
          return (
            <Col key={stats._id} xl={2} l={4} m={6} s={10}>
              <Card
                className="small"
                header={
                  <CardTitle image="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg">
                    Card Title
                  </CardTitle>
                }
                actions={[<Link to={"/inventory/" + stats._id}>More</Link>]}
              >
                Description here.
              </Card>
            </Col>
          );
        });
        this.setState({ carStats });
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="inventory">
        <Grid>
          <Row>{this.state.carStats}</Row>
        </Grid>
=======
      <div className="container">
        <div className="inventory">
          <h1>Inventory</h1>
          <div className="row">{this.state.carStats}</div>
        </div>
>>>>>>> b7b53ad68096045a7144e90a36bd30a9fc7a69a8
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
