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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <Field
            className="form-control"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            className="form-control"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Home Address</label>
          <Field
            className="form-control"
            name="homeAddress"
            component="input"
            type="text"
            placeholder="Home Address"
          />
        </div>
        <div>
          <label>City</label>
          <Field
            className="form-control"
            name="city"
            component="input"
            type="text"
            placeholder="City"
          />
        </div>
        <div>
          <label>State</label>
          <Field
            className="form-control"
            name="state"
            component="input"
            type="text"
            placeholder="State"
          />
        </div>
        <div>
          <label>Zip</label>
          <Field
            className="form-control"
            name="zip"
            component="input"
            type="number"
            placeholder="Zip"
          />
        </div>
        <div>
          <label>Email</label>
          <Field
            className="form-control"
            name="email"
            component="input"
            type="number"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Home Phone</label>
          <Field
            className="form-control"
            name="homePhone"
            component="input"
            type="number"
            placeholder="Home Phone"
          />
        </div>
        <div>
          <label>Cell Phone</label>
          <Field
            className="form-control"
            name="cellPhone"
            component="input"
            type="number"
            placeholder="Cell Phone"
          />
        </div>
        <div>
          <label>SSN/ITEN</label>
          <Field
            className="form-control"
            name="ssnIten"
            component="input"
            type="number"
            placeholder="SSN/ITEN"
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <Field
            className="form-control"
            name="dob"
            component="input"
            type="number"
            placeholder="00/00/0000"
          />
        </div>
        <div>
          <label>`Driver's License State`</label>
          <Field
            className="form-control"
            name="dlState"
            component="input"
            type="number"
            placeholder=""
          />
        </div>
        <div>
          <label>Drivers License Number</label>
          <Field
            className="form-control"
            name="dlNumber"
            component="input"
            type="number"
            placeholder=""
          />
        </div>
        <label>Residential Info</label>
        <div>
          <label>Rent</label>
          <Field
            className="form-control"
            name="rentOwn"
            component="input"
            type="radio"
            value="Rent"
          />
          <label>Own</label>
          <Field
            className="form-control"
            name="rentOwn"
            component="input"
            type="radio"
            value="Own"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            type="submit"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset("loan"));
};

export default reduxForm({ form: "loan", onSubmitSuccess: afterSubmit })(
  LoanForm
);
