import React from "react";
import { Field, reduxForm } from "redux-form";

let AdminPortal = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Make</label>
        <Field name="make" component="input" type="text" />
      </div>
      <div>
        <label>Model</label>
        <Field name="model" component="input" type="text" />
      </div>
      <div>
        <label>Price</label>
        <Field name="price" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

AdminPortal = reduxForm({
  form: "admin"
})(AdminPortal);

export default AdminPortal;
