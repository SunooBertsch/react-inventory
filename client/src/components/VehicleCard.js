import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class VehicleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPage: []
    };
    this.makeCarousel = this.makeCarousel.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  makeCarousel(imgList) {
    const slides = [];
    for (let i = 0; i < imgList.length; i++) {
      if (i === 0) {
        let slide = (
          <div className="carousel-item active" key={i}>
            <img className="d-block w-100" src={imgList[i]} alt="car" />
          </div>
        );
        slides.push(slide);
      } else {
        let slide = (
          <div className="carousel-item" key={i}>
            <img className="d-block w-100" src={imgList[i]} alt="car" />
          </div>
        );
        slides.push(slide);
      }
    }
    if (!this.state.slides) {
      this.setState({ slides });
    }
  }

  renderPage() {
    let card = this.props.inventory[this.props.match.params.id];
    console.log("card", card);
    const carName =
      card.year + " " + card.make + " " + card.model + " " + card.trimLevel;
    console.log("files", card.files);
    const imageList = card.files.map(image => {
      return image.base64;
    });
    this.makeCarousel(imageList);
    return (
      <div>
        <div className="row align-items-middle" style={{ height: "500px" }}>
          <div
            style={{
              width: "100%",
              height: "auto",
              margin: "10px"
            }}
            className="col-sm-5">
            <div
              style={{ width: "100%", margin: "auto" }}
              id="carouselVehicleCard"
              className="carousel slide"
              data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselVehicleCard"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#carouselVehicleCard" data-slide-to="1" />
                <li data-target="#carouselVehicleCard" data-slide-to="2" />
              </ol>
              <div className="carousel-inner">{this.state.slides}</div>
              <a
                className="carousel-control-prev"
                href="#carouselVehicleCard"
                role="button"
                data-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselVehicleCard"
                role="button"
                data-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "auto",
              height: "100%",
              margin: "auto",
              "box-shadow": "8px 8px 25px lightGrey"
            }}
            className="col-sm-6 card">
            <div
              className="card-block"
              style={{
                color: "#213461",
                height: "100%",
                width: "100%",
                margin: "auto"
              }}>
              <h4 className="card-title" style={{ paddingTop: "20px" }}>
                {card.year} {card.make} {card.model} {card.trimLevel}{" "}
              </h4>
              <ul className="list-group" style={{ fontSize: "10px" }}>
                <li className="list-group-item">
                  <strong>Price:</strong> {card.sold ? "SOLD!" : card.price}
                </li>
                <li className="list-group-item">
                  <strong>Year:</strong> {card.year}
                </li>
                <li className="list-group-item">
                  <strong>Make:</strong> {card.make}
                </li>
                <li className="list-group-item">
                  <strong>Model:</strong> {card.model}
                </li>
                <li className="list-group-item">
                  <strong>Trim:</strong> {card.trimLevel}
                </li>
                <li className="list-group-item">
                  <strong>Mileage:</strong> {card.mileage}
                </li>
                <li className="list-group-item">
                  <strong>Engine:</strong> {card.engine}
                </li>
                <li className="list-group-item">
                  <strong>Transmission:</strong> {card.transmission}
                </li>
                <li className="list-group-item">
                  <strong>Seller Notes:</strong> {card.sellersNotes}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="offset-sm-2 col-sm-8 card"
            style={{
              color: "#213461",
              marginTop: "30px",
              padding: "20px",
              "box-shadow": "8px 8px 25px lightGrey",
              fontFamily: "Roboto"
            }}>
            <h3>Ask us about this car!</h3>
            <form method="POST" action="send-car">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="hidden"
                  name="car"
                  value={carName}
                />
              </div>
              <button className="btn btn-success submit-email" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          padding: "30px",
          "box-shadow": "0px 2px 12px lightGrey",
          backgroundColor: "#fafafa"
        }}>
        <div
          className="container"
          style={{ height: "auto", "min-height": "200vh" }}>
          {this.props.inventory.length > 0 ? this.renderPage() : ""}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ inventory }) {
  return { inventory: inventory.inventory };
}

export default connect(mapStateToProps, actions)(VehicleCard);
