import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import bannerImg from "../bannerImage";

const numberWithCommas = x => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class AuctionInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    const cars = this.props.inventory.auctionInventory;
    console.log("car", cars);
    let carStats = cars.map((stats, i) => {
      console.log("id", i);
      if (stats.sold) {
        return (
          <div
            style={{ paddingBottom: "30px" }}
            key={i}
            className="col-xs-12 col-sm-6 col-md-4">
            <div
              style={{
                color: "#525c65",
                fontFamily: "Roboto",
                "box-shadow": "8px 8px 25px lightGrey",
                padding: "15px"
              }}
              className="card">
              <div
                className="card-block"
                style={{
                  textAlign: "right"
                }}>
                <h4>SOLD</h4>
              </div>
              <Link className="card-block" to={"/inventory/" + i}>
                <div
                  className="card-img-top"
                  style={{
                    height: "250px",
                    margin: "auto"
                  }}>
                  <img
                    alt="sold"
                    src={bannerImg}
                    style={{
                      width: "30%",
                      position: "absolute",
                      transform: "rotate(270deg)"
                    }}
                  />
                  <img
                    style={{
                      width: "100%",
                      "object-fit": "contain"
                    }}
                    src={stats.files[0].base64}
                    alt="car"
                  />
                </div>
              </Link>
              <div
                style={{
                  color: "#213461"
                }}
                className="card-text">
                <h6>
                  {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                </h6>
              </div>
              <div
                style={{
                  color: "#213461",
                  "border-bottom": "solid 1px lightGrey"
                }}
                className="caption">
                <h6>Transmission: {stats.transmission}</h6>
                <h6>Doors: {stats.doors}</h6>
                <h6>VIN: {stats.vin}</h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  margin: "20px auto 0 auto"
                }}>
                <Link
                  to="/preapproval"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  Apply for Credit
                </Link>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}>
                <Link
                  to="/contactUs"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  Check Availability
                </Link>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}>
                <Link
                  to={"/inventory/" + i}
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            style={{ paddingBottom: "30px" }}
            key={stats._id}
            className="col-xs-12 col-sm-6 col-md-4">
            <div
              style={{
                color: "#213461",
                fontFamily: "Roboto",
                "box-shadow": "8px 8px 25px lightGrey",
                padding: "15px"
              }}
              className="card">
              <div className="card-block" style={{ textAlign: "right" }}>
                <h4>{"$" + numberWithCommas(stats.price)}</h4>
              </div>
              <Link className="card-block" to={"/inventory/" + i}>
                <div
                  className="card-img-top"
                  style={{
                    height: "250px"
                  }}>
                  <img
                    alt="sold"
                    src={bannerImg}
                    style={{
                      width: "30%",
                      position: "absolute",
                      transform: "rotate(270deg)"
                    }}
                  />
                  <img
                    style={{
                      width: "100%",
                      "object-fit": "contain",
                      margin: "auto"
                    }}
                    src={stats.files[0].base64}
                    alt="car"
                  />
                </div>
              </Link>
              <div
                style={{
                  color: "#213461"
                }}
                className="card-text">
                <h6>
                  {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                </h6>
              </div>
              <div
                style={{
                  color: "#213461",
                  "border-bottom": "solid 1px lightGrey"
                }}
                className="caption">
                <h6>Transmission: {stats.transmission}</h6>
                <h6>Doors: {stats.doors}</h6>
                <h6>VIN: {stats.vin}</h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  margin: "20px auto 0 auto"
                }}>
                <Link
                  to="/preapproval"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  Apply for Credit
                </Link>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}>
                <Link
                  to="/contactUs"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  Check Availability
                </Link>
              </div>
              <div
                style={{
                  textAlign: "center",
                  border: "solid #213461 1px",
                  marginTop: "8px",
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}>
                <Link
                  to={"/inventory/" + i}
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    color: "#213461"
                  }}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        );
      }
    });
    return carStats;
  }

  render() {
    return (
      <div>
        <div
          style={{
            padding: "20px 0 20px",
            "box-shadow": "0px 2px 12px lightGrey"
          }}>
          <div>
            <div className="container" style={{ "min-height": "75vh" }}>
              <div className="row">{this.renderCards()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}

export default connect(mapStateToProps, actions)(AuctionInventory);
