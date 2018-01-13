import React from "react";
import Header from "./Header";
import { Carousel } from "react-bootstrap";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPage: [],
      slides: []
    };
    this.makeCarousel = this.makeCarousel.bind(this);
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
    this.setState({ slides });
  }
  componentDidMount() {
    const request = async () => {
      const response = await fetch(
        "/car-auctions/" + this.props.match.params.id
      );
      const card = await response.json();
      let cardPage = card.map(info => {
        const imageList = info.files.map(image => {
          return image.base64;
        });
        this.makeCarousel(imageList);
        return (
          <div>
            <div style={{ margin: "2% 2%" }}>
              <Carousel controls={true} indicators={false} interval={5000}>
                {this.state.slides}
              </Carousel>
            </div>
            <div className="carInfo">
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>Price: {info.price}</h5>
                </li>
                <li className="collection-item">
                  {info.year} {info.make} {info.model} {info.trimLevel}
                </li>
                <li className="collection-item">
                  <strong>Mileage:</strong> {info.mileage}
                </li>
                <li className="collection-item">
                  <strong>Engine:</strong> {info.engine}
                </li>
                <li className="collection-item">
                  <strong>Transmission:</strong> {info.transmission}
                </li>
                <li className="collection-item">
                  <strong>Seller Notes:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>
          </div>
        );
      });
      this.setState({ cardPage });
    };
    request();
  }
  render() {
    return (
      <div>
        <Header />
        <div>{this.state.cardPage}</div>
      </div>
    );
  }
}

export default Card;
