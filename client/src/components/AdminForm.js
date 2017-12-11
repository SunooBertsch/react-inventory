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
    this.renderImgUploader = this.renderImgUploader.bind(this);
  }

  getFiles(files) {
    console.log("files", files);
    this.setState({ files });
    console.log(this.state.files);
  }

  renderCurrentInventory() {
    fetch("/cars").then(res => {
      return res.json();
    }).then;
    return <div>{}</div>;
  }

  renderImages(files) {
    if (files) {
      console.log("base", files[0].base64);
      return <img src={files[0].base64} />;
    }
  }

  renderImgUploader(field) {
    const files = this.state.files ? this.state.files : field.input.value;
    if (field.input.value) {
      files.push(field.input.value[0]);
    }
    return (
      <div>
        <ImgUploader
          name={field.name}
          onDrop={(files, e) => field.input.onChange(files)}>
          <ul>
            {files ? (
              files.map((file, i) => {
                return <li key={i}>{file.preview}</li>;
              })
            ) : (
              "Img Uploader"
            )}
          </ul>
        </ImgUploader>
      </div>
    );
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
        <FileBase64 multiple={true} onDone={files => this.getFiles(files)} />
        <FileUploader>
          <Image src={this.state ? this.state.files[0].base64 : ""} />
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
