import React, { Component } from "react";
import { Field, reduxForm, reset, change } from "redux-form";
import { FormGroup, FormControl } from "react-bootstrap";

const FILE_FIELD_NAME = "files";

class AdminPortal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, rest, submitting } = this.props;
    return (
      <div
        style={{
          border: "solid black 1px",
          "border-radius": "3px",
          paddingBottom: "65px"
        }}>
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
                name="drivetrain"
                component="input"
                type="number"
                placeholder="Drivetrain"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="doors"
                component="input"
                type="number"
                placeholder="Doors"
              />
            </div>
            <div className="col-sm-4">
              <label />
              <Field
                className="form-control"
                name="exteriorColor"
                component="input"
                type="number"
                placeholder="Exterior Color"
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
                type="number"
                placeholder="Interior Color"
              />
            </div>
            <div className="col-sm-6">
              <label />
              <Field
                className="form-control"
                name="vin"
                component="input"
                type="number"
                placeholder="VIN"
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label />
                <Field
                  className="form-control"
                  name="vehicleType"
                  component="input"
                  type="number"
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
              <div className="col-xs-12">
                <label />
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Seller's Notes"
                />
              </div>
            </div>
          </div>
          <div
            style={{ paddingTop: "15px", textAlign: "center" }}
            className="col-xs-12">
            <button
              class="btn btn-success"
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
