import React from "react";
import Header from "./Header";
import imageList from "../LandingImages";
import { Link } from "react-router-dom";
import {
  Carousel,
  ListGroup,
  ListGroupItem,
  ButtonToolbar,
  Button
} from "react-bootstrap";
// AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE
class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div>
          <Carousel controls={false} indicators={false} interval={5000}>
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
            className="row"
            style={{
              backgroundColor: "#e7e7e7"
            }}
          >
            <div className="col-sm-5" style={{ fontFamily: "Fira Sans" }}>
              <div
                ref="contact"
                style={{
                  backgroundColor: "#e7e7e7",
                  maxHeight: "410px",
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#213159"
                  // maxWidth: "267px"
                }}
              >
                <h3
                  style={{
                    margin: "0px",
                    paddingTop: "30px",
                    textAlign: "center"
                  }}
                >
                  Store Hours
                </h3>
                <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
                  By Appointment Only
                </h5>
                <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                  <li>10:00 AM - 6:00 PM Monday - Friday</li>
                  <li>11:00 AM - 5:00 PM Saturday</li>
                  <li>11:00 AM - 4:00 PM Sunday</li>
                </ul>
                <h3 style={{ textAlign: "center" }}>Contact Information</h3>
                <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                  <li>Phone: (714) 987-1661</li>
                  <li>Email: info@fastturtlemotors.com</li>
                  <li>
                    Like us on Facebook:
                    <a href="https://www.facebook.com/FastTurtleMotors/">
                      <i
                        className="fa fa-facebook-square"
                        style={{ paddingLeft: "6px", fontSize: "12pt" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-sm-7"
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
          <div style={{ backgroundColor: "#e7e7e7" }}>
            <div
              className="container"
              style={{
                backgroundColor: "#e7e7e7",
                color: "#213159",
                paddingBottom: "10px"
              }}
            >
              <h3>Email Us</h3>
              <form method="POST" action="send">
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="email" name="email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input className="form-control" type="text" name="phone" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div
            className="bottomInfo"
            style={{
              borderTop: "1px solid grey",
              paddingBottom: "10px",
              backgroundColor: "#e7e7e7",
              color: "#213159"
            }}
          >
            <div className="row" style={{ marginLeft: "15px" }}>
              <div className="col-sm-4" style={{}}>
                <h4>About Us</h4>
              </div>
              <div className="col-sm-4" style={{}}>
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>Phone: (714) 987-1661</li>
                  <li>Email: info@fastturtlemotors.com</li>
                </ul>
              </div>
              <div className="col-sm-4" style={{}}>
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/FastTurtleMotors/">
                  <i
                    className="fa fa-facebook"
                    ariaHidden="true"
                    style={{ color: "#213159" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
