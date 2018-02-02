import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";

class AdminPortal extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div
        className="container"
        style={{
          border: "solid #e7e7e7 2px",
          "border-radius": "3px",
          paddingBottom: "65px",
          textAlign: "center"
        }}>
        <label style={{ color: "#e7e7e7", paddingTop: "5px" }}>
          New Inventory Submission
        </label>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="make"
                component="input"
                type="text"
                placeholder="Make"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="model"
                component="input"
                type="text"
                placeholder="Model"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="transmission"
                component="input"
                type="text"
                placeholder="Transmission"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label />
              <Field
                className="form-control"
                name="mileage"
                component="input"
                type="number"
                placeholder="Mileage"
              />
            </div>
            <div className="col-sm-6">
              <label />
              <Field
                className="form-control"
                name="price"
                component="input"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="engine"
                component="input"
                type="text"
                placeholder="Engine"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="trimLevel"
                component="input"
                type="text"
                placeholder="Trim Level"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="year"
                component="input"
                type="number"
                placeholder="Year"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="passengerCapacity"
                component="input"
                type="number"
                placeholder="Passenger Capacity"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="tire"
                component="input"
                type="text"
                placeholder="Tire"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="basicWarranty"
                component="input"
                type="text"
                placeholder="Basic Warranty"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="powertrainWarranty"
                component="input"
                type="text"
                placeholder="Powertrain Warranty"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="mpg"
                component="input"
                type="number"
                placeholder="MPG"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="recalls"
                component="input"
                type="text"
                placeholder="Recalls"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label />
              <Field
                className="form-control"
                name="interiorColor"
                component="input"
                type="text"
                placeholder="Interior Color"
              />
            </div>
            <div className="col-sm-6">
              <label />
              <Field
                className="form-control"
                name="vin"
                component="input"
                type="text"
                placeholder="VIN"
              />
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-6">
                <label />
                <Field
                  className="form-control"
                  name="vehicleType"
                  component="input"
                  type="text"
                  placeholder="Vehicle Type"
                />
              </div>
              <div className="col-sm-6">
                <label />
                <Field
                  className="form-control"
                  name="stockNumber"
                  component="input"
                  type="number"
                  placeholder="Stock Number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label />
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Seller's Notes"
                />
              </div>
            </div>
            <div className="col-sm-2 offset-sm-5">
              <label
                style={{
                  color: "#e7e7e7"
                }}>
                Auction
              </label>
              <Field
                className="form-control"
                name="auction"
                component="input"
                type="checkbox"
              />
            </div>
          </div>
          <div
            style={{ paddingTop: "15px", textAlign: "center" }}
            className="col-xs-12">
            <button
              className="btn btn-success"
              type="submit"
              disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset("car"));
};

export default reduxForm({ form: "car", onSubmitSuccess: afterSubmit })(
  AdminPortal
);
