import React, { Component } from "react";
import { Field, reduxForm, reset, change } from "redux-form";
import styled from "styled-components";
import { FormGroup, FormControl } from "react-bootstrap";

const FormComponent = styled.form`width: 100%;`;

const FILE_FIELD_NAME = "files";

class AdminPortal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, rest, submitting } = this.props;
    return (
      <FormComponent onSubmit={handleSubmit}>
        <FormGroup>
          <div>
            <label>Make</label>
            <Field
              name="make"
              component={FormControl}
              type="text"
              placeholder="Make"
            />
          </div>
          <div>
            <label>Model</label>
            <Field
              name="model"
              component={FormControl}
              type="text"
              placeholder="Model"
            />
          </div>
          <div>
            <label>Transmission</label>
            <Field
              name="transmission"
              component={FormControl}
              type="text"
              placeholder="Transmission"
            />
          </div>
          <div>
            <label>Engine</label>
            <Field
              name="engine"
              component={FormControl}
              type="text"
              placeholder="Engine"
            />
          </div>
          <div>
            <label>Trim Level</label>
            <Field
              name="trimLevel"
              component={FormControl}
              type="text"
              placeholder="Trim Level"
            />
          </div>
          <div>
            <label>Year</label>
            <Field
              name="year"
              component={FormControl}
              type="number"
              placeholder="Year"
            />
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </FormGroup>
      </FormComponent>
    );
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset("car"));
};

export default reduxForm({ form: "car", onSubmitSuccess: afterSubmit })(
  AdminPortal
);
