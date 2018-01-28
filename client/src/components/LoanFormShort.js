import React, { Component } from "react";
import { Field, reduxForm, reset, change } from "redux-form";
import { FormGroup, FormControl } from "react-bootstrap";

const FILE_FIELD_NAME = "files";

class LoanFormShort extends Component {
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
        <div className="col-sm-8">
          <label />
          <Field
            className="form-control"
            name="email"
            component="input"
            type="text"
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
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="cellPhone"
            component="input"
            type="text"
            placeholder="Cell Phone"
          />
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="dob"
            component="input"
            type="text"
            placeholder="Date of Birth"
          />
        </div>
        <div style={{ height: "10px" }} className="col-sm-12" />
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="yearsAtAddress"
            component="input"
            type="number"
            placeholder="Years at address (ex: 2.5)"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="grossMonthlySalary"
            component="input"
            type="number"
            placeholder="Gross Monthly Salary"
          />
        </div>
        <div className="col-sm-4">
          <label />
          <Field
            className="form-control"
            name="yearsEmployed"
            component="input"
            type="number"
            placeholder="Years employed"
          />
        </div>
        <div style={{ height: "10px" }} className="col-sm-12" />
        <div
          className="col-xs-12"
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
            name="interestedVehicleInfo"
            component="input"
            type="text"
            placeholder="Year Make Model"
          />
        </div>
        <div className="col-sm-6">
          <label />
          <Field
            className="form-control"
            name="downPaymentAvailable"
            component="input"
            type="number"
            placeholder="Downpayment Available"
          />
        </div>
        <div style={{ height: "30px" }} className="col-xs-12" />
        <div className="col-xs-12" style={{ textAlign: "center" }}>
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
  dispatch(reset("loanShort"));
};

export default reduxForm({
  form: "loanShort",
  onSubmitSuccess: afterSubmit
})(LoanFormShort);
