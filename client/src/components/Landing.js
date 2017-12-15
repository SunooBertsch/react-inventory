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
          <Slide style={{ width: "100%", height: "auto" }} src={imageList[0]} />
          <Slide src={imageList[1]} />
          <Slide src={imageList[2]} />
          <Slide src={imageList[3]} />
          <Slide src={imageList[4]} />
        </Slider>
        <div style={{ "background-color": "#37474f", height: "400px" }}>
          <h1 style={{ margin: "0px", padding: "30px" }}>Coming Soon!</h1>
          <ul>
            <li>Fast Turtle Motors</li>
            <li>22605 La Palma Ave</li>
            <li>Yorba Linda, CA 92887</li>
            <li> </li>
            <li>Hours, By Appointment Only</li>
            <li>10-6 M-F</li>
            <li>11-5 Sat</li>
            <li>11-4 Sun</li>
          </ul>
        </div>
        <img src="https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=1600x300&maptype=roadmap&markers=color:red|1+Red+Coat+Place,Irvine,CA&key=AIzaSyCCgI_LUPr22emwHMS2taBtDxq0nro7CMQ" />
      </div>
    );
  }
}

export default Landing;
