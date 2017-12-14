import React from "react";
import imageList from "../LandingImages";
import { Slider, Slide } from "react-materialize";
// AIzaSyCCgI_LUPr22emwHMS2taBtDxq0nro7CMQ
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
        <img src="https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=1600x300&maptype=roadmap&markers=color:red|1+Red+Coat+Place,Irvine,CA&key=AIzaSyCCgI_LUPr22emwHMS2taBtDxq0nro7CMQ" />
      </div>
    );
  }
}

export default Landing;
