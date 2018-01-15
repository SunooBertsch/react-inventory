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
