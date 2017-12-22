import React from "react";
import Header from "./Header";
import imageList from "../LandingImages";
import { Carousel, ListGroup, ListGroupItem } from "react-bootstrap";
// AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE
class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div style={{ textAlign: "center" }}>
          <Carousel controls={false} indicators={true} interval={5000}>
            <Carousel.Item>
              <img alt="car" src={imageList[0]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[1]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[2]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[3]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[4]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[5]} />
            </Carousel.Item>
          </Carousel>
          <div
            ref="contact"
            style={{ backgroundColor: "#546e7a", height: "400px" }}
          >
            <h2 style={{ margin: "0px", paddingTop: "30px" }}>Store Hours</h2>
            <h5>By Appointment Only</h5>
            <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
              <li>10:00 AM - 6:00 PM Monday - Friday</li>
              <li>11:00 AM - 5:00 PM Saturday</li>
              <li>11:00 AM - 4:00 PM Sunday</li>
            </ul>
            <h5 style={{ textDecoration: "underline" }}>Contact Info</h5>
            <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
              <li>Phone: (714) 987-1661</li>
              <li>Email: info@fastturtlemotors.com</li>
            </ul>
          </div>
          <div
            style={{
              position: "relative",
              height: "0",
              paddingBottom: "56.25%",
              overflow: "hidden"
            }}
          >
            <iframe
              style={{
                border: "0",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
                // maxHeight: "450px"
              }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=22605+La+Palma+Ave+ste+505,Yotba+Linda+CA"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
