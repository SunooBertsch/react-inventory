import React, { Component } from "react";
import AdminForm from "./AdminForm";
import Header from "./Header";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import CurrentInventory from "./CurrentInventory";
import FileBase64 from "react-file-base64";

const AdminContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 10fr;
  grid-template-rows: 1fr;
  grid-template-areas: "builds form";
  grid-gap: 1rem;
  padding-top: 1.5rem;
`;

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
          <li>
            <Image key={i} src={file.base64} />
          </li>
        );
      });
      return imagesList;
    }
  }

  handleSubmit(data) {
    const req = { ...data, files: this.state.files };
    this.props.handleForm(req);
  }

  render() {
    return (
      <div>
        <Header />
        <AdminContainer>
          <CurrentInventory />
          <AdminForm onSubmit={this.handleSubmit} />
          <div>
            <FileBase64
              multiple={true}
              onDone={files => this.getFiles(files)}
            />
          </div>
          <FileUploader>
            <ul>{this.renderImgs()}</ul>
          </FileUploader>
        </AdminContainer>
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
