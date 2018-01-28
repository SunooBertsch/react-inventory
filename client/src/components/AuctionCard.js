import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import * as actions from "../actions";

const numberWithCommas = x => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class AuctionCard extends React.Component {
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
        <Carousel.Item>
          <img alt="car" src={imgList[i]} />
        </Carousel.Item>
      );

      slides.push(slide);
    }
    if (!this.state.slides) {
      this.setState({ slides });
    }
  }

  renderPage() {
    console.log(this.props);
    let card = this.props.inventory.auctionInventory[
      this.props.match.params.id
    ];
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
          <Carousel
            className=" col-xs-12"
            controls={true}
            indicators={true}
            interval={5000}>
            {this.state.slides}
          </Carousel>
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
            <ul className="collection with-header" style={{ padding: "5%" }}>
              <li className="collection-header">
                <strong>Price:</strong>{" "}
                {card.sold ? "SOLD!" : numberWithCommas(card.price)}
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
      <div style={{ width: "100%", paddingTop: "30px" }}>
        <div>{this.renderPage()}</div>
      </div>
    );
  }
}

function mapStateToProps({ inventory }) {
  return { inventory };
}

export default connect(mapStateToProps, actions)(AuctionCard);
