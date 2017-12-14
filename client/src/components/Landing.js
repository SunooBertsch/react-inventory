import React from "react";
import imageList from "../LandingImages";
import { Slider, Slide } from "react-materialize";
// AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE
class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Slider indicators={false}>
          <Slide src={imageList[0]} />
          <Slide src={imageList[1]} />
          <Slide src={imageList[2]} />
          <Slide src={imageList[3]} />
          <Slide src={imageList[4]} />
        </Slider>
        <div style={{ "background-color": "#37474f", height: "400px" }}>
          <h1 style={{ margin: "0px", padding: "30px" }}>Coming Soon!</h1>
        </div>
        <div
          style={{
            position: "relative",
            "padding-bottom": "56.25%",
            height: "0",
            overflow: "hidden"
          }}
        >
          <iframe
            height="450px"
            width="800px"
            style={{
              border: "0",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=Marketplace,Irvine+CA"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Landing;
