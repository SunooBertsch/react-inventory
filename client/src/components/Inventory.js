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
        return (
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={stats.files[0].base64} />
              </div>
              <div className="card-content">
                {stats.year} {stats.make} {stats.model} {stats.trimLevel}
              </div>
              <div className="card-action">
                <Link to={"/inventory/" + stats._id}>More</Link>
              </div>
            </div>
          </div>
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
