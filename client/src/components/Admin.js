import React, { Component } from "react";
import AdminForm from "./AdminForm";
import Header from "./Header";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

  getFiles(files) {
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
        <Header />
        <AdminContainer style={{ backgroundColor: "#213159" }} className="row">
          <div className="col-xs-12 col-md-8">
            <CurrentInventory className="col-sm-4" />
          </div>
          <div style={{ paddingTop: "20px" }} className="col-xs-12 col-md-4">
            <AdminForm onSubmit={this.handleSubmit} />
            <div style={{ textAlign: "center" }}>
              <label style={{ paddingTop: "15px",color: "#e7e7e7" }}>Upload Images</label>
              <FileBase64
                multiple={true}
                onDone={files => this.getFiles(files)}
              />
              <FileUploader style={{ paddingTop: "15px" }}>
                <ul>{this.renderImgs()}</ul>
              </FileUploader>
            </div>
          </div>
        </AdminContainer>
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
