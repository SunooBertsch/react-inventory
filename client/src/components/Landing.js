import React from "react";
import imageList from "../LandingImages";
import { Carousel } from "react-responsive-carousel";
// import { Slider, Slide } from "react-materialize";
// AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE
class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Carousel
          autoPlay={true}
          interval={4000}
          dynamicHeight={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img src={imageList[0]} alt={"Car"} />
          </div>
          <div>
            <img src={imageList[1]} alt={"Car"} />
          </div>
          <div>
            <img src={imageList[2]} alt={"Car"} />
          </div>
          <div>
            <img src={imageList[3]} alt={"Car"} />
          </div>
          <div>
            <img src={imageList[4]} alt={"Car"} />
          </div>
        </Carousel>
        <div style={{ backgroundColor: "#37474f", height: "400px" }}>
          <h1 style={{ margin: "0px", padding: "30px" }}>Coming Soon!</h1>
        </div>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: "0",
            overflow: "hidden"
          }}
        >
          <iframe
            height="45 run0px"
            width="800px"
            style={{
              border: "0",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=22605+La+Palma+Ave,YorbaLinda+CA"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Landing;

/*
<Slider indicators={false}>
  <Slide src={imageList[0]} />
  <Slide src={imageList[1]} />
  <Slide src={imageList[2]} />
  <Slide src={imageList[3]} />
  <Slide src={imageList[4]} />
</Slider>
*/
