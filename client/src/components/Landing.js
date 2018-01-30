import React from "react";
import imageList from "../LandingImages";

class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ fontFamily: "Roboto", backgroundColor: "#fafafa" }}>
        <div
          id="carouselLanding"
          className="carousel slide"
          data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a data-toggle="modal" data-target="#testingModal">
                <img className="d-block w-100" src={imageList[0]} alt="car" />
              </a>
            </div>
            <div className="carousel-item">
              <a data-toggle="modal" data-target="#testingModal">
                <img className="d-block w-100" src={imageList[1]} alt="car" />
              </a>
            </div>
            <div className="carousel-item">
              <a data-toggle="modal" data-target="#testingModal">
                <img className="d-block w-100" src={imageList[2]} alt="car" />
              </a>
            </div>
          </div>
          <div
            className=" modal fade"
            id="testingModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: "90%" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={imageList[0]}
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={imageList[1]}
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={imageList[2]}
                          alt="Third slide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="row"
            style={{
              color: "#213461"
            }}>
            <div className="col-sm-6">
              <div
                className="align-middle"
                ref="contact"
                style={{ textAlign: "center" }}>
                <h3
                  style={{
                    paddingTop: "30px",
                    textAlign: "center"
                  }}>
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
            <div
              className="col-xs-12 col-sm-6"
              style={{ fontFamily: "Roboto" }}>
              <div
                className="container col-xs-12 col sm-6"
                style={{
                  padding: "15px"
                }}>
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
              className="col-sm-12"
              style={{
                position: "relative",
                height: "0",
                paddingBottom: "56.25%",
                overflow: "hidden"
              }}>
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
