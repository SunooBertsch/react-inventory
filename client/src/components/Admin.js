import React, { Component } from "react";
import AdminForm from "./AdminForm";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions";
import CurrentInventory from "./CurrentInventory";
import FileBase64 from "react-file-base64";

const AdminContainer = styled.div``;

// grid-template-columns: 1fr 5fr 10fr 1fr;
// grid-template-rows: 1fr;

const FileUploader = styled.div``;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderImgs = this.renderImgs.bind(this);
  }

  getFilesFromFileBase(files) {
    if (this.state) {
      const state = this.state.files;
      const updated = [...state, files[0]];
      this.setState({ files: updated });
    } else {
      this.setState({ files });
    }
  }

  renderImgs() {
    if (this.state) {
      const images = this.state.files;
      const imagesList = images.map((file, i) => {
        return (
          <li key={i}>
            <Image src={file.base64} />
          </li>
        );
      });
      return imagesList;
    }
  }

  handleSubmit(data) {
    const req = { ...data, files: this.state.files };
    this.props.handleForm(req);
    this.setState({ files: [] });
  }

  render() {
    return (
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#213159" }}>
        <div style={{ backgroundColor: "#213159" }} className="row">
          <div className="col-lg-8">
            <CurrentInventory />
          </div>
          <div style={{ paddingTop: "20px" }} className="col-lg-4">
            <AdminForm onSubmit={this.handleSubmit} />
            <div style={{ textAlign: "center" }}>
              <label style={{ paddingTop: "15px", color: "#e7e7e7" }}>
                Upload Images
              </label>
              <FileBase64
                multiple={true}
                onDone={files => this.getFilesFromFilebase(files)}
              />
              <FileUploader style={{ paddingTop: "15px" }}>
                <ul>{this.renderImgs()}</ul>
              </FileUploader>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            textAlign: "center",
            padding: "20px 0 60px",
            backgroundColor: "#213159"
          }}>
          <a class="btn btn-danger" href="/api/logout">
            Logout
          </a>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ inventory }) {
  return {
    inventory
  };
}
export default connect(mapStateToProps, actions)(Admin);
