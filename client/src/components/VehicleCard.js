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
      let cardPage = card.map(info => {
        const imageList = info.files.map(image => {
          return image.base64;
        });
        return (
          <Carousel
            options={{ fullWidth: true, indicators: true }}
            images={imageList}
            style={{ height: "auto" }}
          />
        );
      });
      this.setState({ cardPage });
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
