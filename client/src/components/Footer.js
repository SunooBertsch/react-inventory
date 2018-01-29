import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        className="bottomInfo"
        style={{
          padding: "30px 0 20px",
          color: "#213159",
          fontFamily: "Fira Sans"
        }}>
        <div className="row" style={{ marginLeft: "15px" }}>
          <div className="col-sm-4" style={{}}>
            <h4>About Us</h4>
          </div>
          <div className="col-sm-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Phone: (714) 987-1661</li>
              <li>Email: info@fastturtlemotors.com</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/FastTurtleMotors/">
              <i
                className="fa fa-facebook"
                aria-hidden="true"
                style={{ color: "#213159" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
