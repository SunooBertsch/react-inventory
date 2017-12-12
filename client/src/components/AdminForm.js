import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import ImgUploader from "react-dropzone";
import FileBase64 from "react-file-base64";
import styled from "styled-components";

const FormComponent = styled.form`width: 100%;`;

const FileUploader = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const FILE_FIELD_NAME = "files";

class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.renderImgs = this.renderImgs.bind(this);
  }

  getFiles(files) {
    if (this.state) {
      const state = this.state.files;
      const updated = [...state, files[0]];
      console.log("updated", updated);
      this.setState({ files: updated });
    } else {
      this.setState({ files });
      console.log("state", this.state);
    }
  }

  renderImgs() {
    console.log("state", this.state);
    if (this.state) {
      const images = this.state.files;
      const imagesList = images.map((file, i) => {
        return (
          <li>
            <Image key={i} src={file.base64} />
          </li>
        );
      });
      return imagesList;
    }
  }

  render() {
    const { handleSubmit, pristine, rest, submitting } = this.props;
    return (
      <FormComponent onSubmit={handleSubmit}>
        <div>
          <label>Make</label>
          <Field name="make" component="input" type="text" placeholder="Make" />
        </div>
        <div>
          <label>Model</label>
          <Field
            name="model"
            component="input"
            type="text"
            placeholder="Model"
          />
        </div>
        <div>
          <label>Transmission</label>
          <Field
            name="transmission"
            component="input"
            type="text"
            placeholder="Transmission"
          />
        </div>
        <div>
          <label>Engine</label>
          <Field
            name="engine"
            component="input"
            type="text"
            placeholder="Engine"
          />
        </div>
        <div>
          <label>Trim Level</label>
          <Field
            name="trimLevel"
            component="input"
            type="text"
            placeholder="Trim Level"
          />
        </div>
        <div>
          <label>Year</label>
          <Field
            name="year"
            component="input"
            type="number"
            placeholder="Year"
          />
        </div>
        <div>
          <FileBase64 multiple={true} onDone={files => this.getFiles(files)} />
        </div>
        <FileUploader>
          <ul>{this.renderImgs()}</ul>
        </FileUploader>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
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
