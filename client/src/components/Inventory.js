import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import bannerImg from "../bannerImage";
import Footer from "./Footer";

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
        if (stats.sold) {
          return (
            <div key={stats._id} className="col-xs-12 col-sm-6 col-md-4">
              <div
                style={{
                  backgroundColor: "#e7e7e7",
                  "border-radius": "0px"
                }}
                className="thumbnail">
                <div style={{ textAlign: "right" }}>
                  <h4>$36,777</h4>
                </div>
                <Link to={"/inventory/" + stats._id}>
                  <img
                    alt="sold"
                    className="banner"
                    src={bannerImg}
                    style={{ width: "40%" }}
                  />
                  <img
                    style={{ width: "auto" }}
                    src={stats.files[0].base64}
                    alt="car"
                  />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                  <div className="caption">
                    <h6>VIN: {stats.vin}</h6>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "#912525"
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
            <div key={stats._id} className="col-xs-12 col-sm-6 col-md-4">
              <div
                style={{
                  backgroundColor: "#e7e7e7",
                  "border-radius": "0px"
                }}
                className="thumbnail">
                <div style={{ textAlign: "right" }}>
                  <h4>{"$" + stats.price}</h4>
                </div>
                <Link to={"/inventory/" + stats._id}>
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year.toUpperCase()} {stats.make.toUpperCase()}{" "}
                      {stats.model.toUpperCase()}{" "}
                      {stats.trimLevel.toUpperCase()}
                    </h4>
                  </div>
                  <div className="caption">
                    <h6>VIN: {stats.vin}</h6>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "#912525",
                    "vertical-align": "bottom"
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
        <div
          className="inventory"
          style={{ paddingTop: "15px", backgroundColor: "#213461" }}>
          <div>
            <Grid style={{ "min-height": "75vh" }}>
              <div className="row">{this.state.carStats}</div>
            </Grid>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Inventory);
