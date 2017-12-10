import React from "react";
import { Carousel } from "react-materialize";
import imageList from "../mongo.js";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardPage: [] };
  }
  componentDidMount() {
    fetch("/cars/" + this.props.match.params.id)
      .then(res => {
        return res.json();
      })
      .then(card => {
        let cardPage = card.map(info => {
          return (
            <Carousel
              options={{ fullWidth: true, indicators: true }}
              images={imageList}
            />
          );
        });
        this.setState({ cardPage });
      });
  }
  render() {
    return (
      <div>
        <h1>Card Page</h1>
        <div>{this.state.cardPage}</div>
      </div>
    );
  }
}

export default Card;
