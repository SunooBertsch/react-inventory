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
      let slide = (
        <div className="carousel-item active">
          <img className="d-block w-100" src={imgList[i]} alt="car" />
        </div>
      );

      slides.push(slide);
    }
    if (!this.state.slides) {
      this.setState({ slides });
    }
  }

  renderPage() {
    let card = this.props.inventory[this.props.match.params.id];
    console.log("card", card);
    console.log("card", card);
    const carName =
      card.year + " " + card.make + " " + card.model + " " + card.trimLevel;
    console.log("files", card.files);
    const imageList = card.files.map(image => {
      return image.base64;
    });
    this.makeCarousel(imageList);
    return (
      <div
        style={{
          color: "#e7e7e7"
        }}>
        <div className="carousel-and-details  align-middle">
          <div
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
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselVehicleCard"
              role="button"
              data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="col-xs-1 col-sm-0" />
          <div
            className="align-middle col-xs-12"
            style={{
              backgroundColor: "#e7e7e7",
              color: "#912525",
              height: "100%",
              width: "100%",
              paddingTop: "20px"
            }}>
            <h4 style={{ textAlign: "center" }}>
              {card.year} {card.make} {card.model} {card.trimLevel}{" "}
            </h4>
            <ul className="" style={{ padding: "5%" }}>
              <li className="">
                <strong>Price:</strong> {card.sold ? "SOLD!" : card.price}
              </li>
              <li className="collection-item">
                <strong>Year:</strong> {card.year}
              </li>
              <li className="collection-item">
                <strong>Make:</strong> {card.make}
              </li>
              <li className="collection-item">
                <strong>Model:</strong> {card.model}
              </li>
              <li className="collection-item">
                <strong>Trim:</strong> {card.trimLevel}
              </li>
              <li className="collection-item">
                <strong>Mileage:</strong> {card.mileage}
              </li>
              <li className="collection-item">
                <strong>Engine:</strong> {card.engine}
              </li>
              <li className="collection-item">
                <strong>Transmission:</strong> {card.transmission}
              </li>
              <li className="collection-item">
                <strong>Seller Notes:</strong> {card.sellersNotes}
              </li>
            </ul>
          </div>
          <div
            className="col-xs-offset-1 col-xs-10"
            style={{ backgroundColor: "#213461", marginTop: "30px" }}>
            <h3>Ask us about this car!</h3>
            <form method="POST" action="send-car">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeHolder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeHolder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeHolder="Phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeHolder="Message"
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
              <button className="btn submit-email" type="submit">
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
        className="container"
        style={{ width: "100%", height: "auto", paddingTop: "30px" }}>
        <div>{this.props.inventory.length > 0 ? this.renderPage() : ""}</div>
      </div>
    );
  }
}

function mapStateToProps({ inventory }) {
  return { inventory: inventory.inventory };
}

export default connect(mapStateToProps, actions)(VehicleCard);
