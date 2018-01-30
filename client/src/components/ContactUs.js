import React from "react";
class ContactUs extends React.Component {
  render() {
    return (
      <div style={{ boxShadow: "0px 4px 12px lightGrey" }}>
        <div
          className="row"
          style={{
            color: "#213461"
          }}>
          <div
            className="offset-sm-3 col-sm-6"
            style={{ fontFamily: "Roboto", padding: "30px" }}>
            <div
              className="card"
              style={{
                padding: "30px"
              }}>
              <h3>Email Us</h3>
              <form className="align-middle" method="POST" action="send">
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
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="align-middle"
              ref="contact"
              style={{ textAlign: "center", padding: "30px" }}>
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
                  <a
                    style={{ marginLeft: "5px" }}
                    href="https://www.facebook.com/FastTurtleMotors/">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-sm-6"
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
    );
  }
}

export default ContactUs;
