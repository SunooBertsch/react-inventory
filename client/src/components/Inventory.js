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
      //showCard: false
    };
    //this.handleClick = this.handleClick.bind(this);
    //this.renderCard = this.renderCard.bind(this);
  }
  /*
  handleClick(stats) {
    console.log("clicked!");
    let id = <h1>{stats._id}</h1>;
  }
*/
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
                actions={[
                  <Link
                    to={"/inventory/" + stats._id}
                    //onClick={() => this.handleClick(stats)}
                  >
                    More
                  </Link>
                ]}
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
      <div className="container">
        <div className="inventory" display="block">
          <h1>Inventory</h1>
          <div className="row">{this.state.carStats}</div>
        </div>
        <div className="vehicle-card" display="hidden" />
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
