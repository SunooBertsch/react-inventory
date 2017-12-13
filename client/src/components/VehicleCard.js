import React from "react";
import { Carousel } from "react-materialize";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardPage: [] };
  }
  componentDidMount() {
    const request = async () => {
      const response = await fetch("/cars/" + this.props.match.params.id);
      const card = await response.json();
      console.log(card);
      let cardPage = card.map(info => {
        const imageList = info.files.map(image => {
          return image.base64;
        });
        return (
          <div>
            <Carousel
              options={{ fullWidth: true, indicators: true }}
              images={imageList}
              style={{ height: "auto" }}
            />
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
      console.log(this.state.cardPage);
    };
    request();
  }
  render() {
    return (
      <div>
        <div>{this.state.cardPage}</div>
      </div>
    );
  }
}

export default Card;

