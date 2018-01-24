import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Footer from "./Footer";
import bannerImg from "../bannerImage";

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
            <div
              key={stats._id}
              className="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-4"
            >
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img
                    alt="sold"
                    className="banner"
                    src={bannerImg}
                    style={{ width: "37%" }}
                  />
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                  <div />
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid grey 1px",
                    backgroundColor: "#213159"
                  }}
                >
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "white"
                    }}
                  >
                    Apply for Credit
                  </a>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={stats._id}
              className="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-4"
            >
              <div className="thumbnail">
                <Link to={"/inventory/" + stats._id}>
                  <img src={stats.files[0].base64} alt="car" />
                  <div className="caption">
                    <h4>
                      {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                    </h4>
                  </div>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    border: "solid grey 1px",
                    backgroundColor: "#213159"
                  }}
                >
                  <a
                    href="/preapproval"
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "white"
                    }}
                  >
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
        <div className="inventory" style={{ paddingTop: "15px" }}>
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
