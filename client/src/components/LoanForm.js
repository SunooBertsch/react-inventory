import React, { Component } from "react";
import { Field, reduxForm, reset, change } from "redux-form";
import { FormGroup, FormControl } from "react-bootstrap";

const FILE_FIELD_NAME = "files";

class LoanForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, rest, submitting } = this.props;
    return (
      <form
        style={{ backgroundColor: "#e7e7e7", margin: "0 0 100px 0" }}
        className="col-sm-8 col-xs-10"
        onSubmit={handleSubmit}>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "bold",
            paddingTop: "10px"
          }}>
          Personal Info
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="col-sm-12">
          <label />
          <Field
            className="form-control"
            name="homeAddress"
            component="input"
            type="text"
            placeholder="Home Address"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="city"
            component="input"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="state"
            component="input"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="zip"
            component="input"
            type="number"
            placeholder="Zip"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="email"
            component="input"
            type="number"
            placeholder="Email"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="homePhone"
            component="input"
            type="text"
            placeholder="Home Phone"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="cellPhone"
            component="input"
            type="text"
            placeholder="Cell Phone"
          />
        </div>
        <div className="col-sm-3">
          <label />
          <Field
            className="form-control"
            name="ssnIten"
            component="input"
            type="text"
            placeholder="SSN/ITEN"
          />
        </div>
        <div className="col-sm-3">
          <label />
          <Field
            className="form-control"
            name="dob"
            component="input"
            type="number"
            placeholder="Date of Birth"
          />
        </div>
        <div className="col-sm-3">
          <label />
          <Field
            className="form-control"
            name="dlState"
            component="input"
            type="text"
            placeholder="DL State"
          />
        </div>
        <div className="col-sm-3">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="text"
            placeholder="DL Number"
          />
        </div>
        <div style={{ height: "10px" }} className="col-sm-12" />
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "bold",
            paddingTop: "10px"
          }}>
          Residential Info
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="text"
            placeholder="Rent/Own"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="$Rent/Mortgage"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Years at address (ex: 2.5)"
          />
        </div>
        <div style={{ height: "10px" }} className="col-sm-12" />
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "bold",
            paddingTop: "10px"
          }}>
          Employement Info
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Employer's Name"
          />
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Title/Position"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Employer Phone #"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Gross Monthly Salary"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Years employed"
          />
        </div>
        <div style={{ height: "10px" }} className="col-sm-12" />
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "bold",
            paddingTop: "10px"
          }}>
          Vehicle Interested In
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="text"
            placeholder="Year Make Model"
          />
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Downpayment Available"
          />
        </div>
        <div style={{ height: "10px" }} className="col-xs-12" />
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "bold",
            paddingTop: "10px"
          }}>
          Trade In
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="text"
            placeholder="VIN Number"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Make Model Year"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder="Mileage"
          />
        </div>
        <div style={{ height: "10px" }} className="col-xs-12" />
        <div style={{ textAlign: "center" }}>
          <button
            class="btn btn-success"
            type="submit"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
        <div style={{ height: "20px" }} className="col-xs-12" />
      </form>
    );
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset("loan"));
};

export default reduxForm({
  form: "loan",
  onSubmitSuccess: afterSubmit
})(LoanForm);
