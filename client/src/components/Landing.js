import React from "react";
import imageList from "../LandingImages";

class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ fontFamily: "Roboto", backgroundColor: "#fafafa" }}>
        <div
          id="carouselLandin"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imageList[0]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[1]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[2]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[3]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[4]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[5]} alt="car" />
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <div
            className="row"
            style={{
              color: "#213461"
            }}
          >
            <div className="col-sm-6">
              <div
                ref="contact"
<<<<<<< HEAD
                style={{ textAlign: "center" }}
              >
=======
                style={{
                  textAlign: "center",
                  height: "100%",
                  padding: "45px 0"
                }}>
>>>>>>> 840fe54e2ae097fd8df3ad63c7c16447acf16422
                <h3
                  style={{
                    textAlign: "center"
                  }}
                >
                  Store Hours
                </h3>
                <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
                  By Appointment Only
                </h5>
                <ul className="list-unstyled">
                  <li>10:00 AM - 6:00 PM Monday - Friday</li>
                  <li>11:00 AM - 5:00 PM Saturday</li>
                  <li>11:00 AM - 4:00 PM Sunday</li>
                </ul>
                <h3 style={{ textAlign: "center" }}>Contact Information</h3>
                <ul className="list-unstyled">
                  <li>Phone: (714) 987-1661</li>
                  <li>Email: info@fastturtlemotors.com</li>
                  <li>
                    Like us on Facebook:
                    <a href="https://www.facebook.com/FastTurtleMotors/">
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
<<<<<<< HEAD
            <div
              className="col-xs-12 col-sm-6"
              style={{ fontFamily: "Roboto" }}
            >
=======
            <div className="col-sm-6" style={{ fontFamily: "Roboto" }}>
>>>>>>> 840fe54e2ae097fd8df3ad63c7c16447acf16422
              <div
                className="container col-xs-12 col sm-6"
                style={{
                  padding: "15px"
                }}
              >
                <h3>Email Us</h3>
                <form method="POST" action="send">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    />
                  </div>
                  <button className="btn submit-email" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              className="offset-sm-3 col-sm-6"
              style={{
                position: "relative",
                height: "0",
                paddingBottom: "56.25%",
                overflow: "hidden",
                marginTop: "30px"
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
                }}
                title="map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=22605+La+Palma+Ave+ste+505,Yotba+Linda+CA"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
