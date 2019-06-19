import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AddActions } from "../../../store/ducks/addTool";

import "./styles.css";
import addIcn from "../../../images/add.svg";

const customStyles = {
  overlay: {
    backgroundColor: "rgb(153,153,153, 0.5)"
  },
  content: {
    margin: "auto",
    width: "40%",
    height: "60%",
    backgroundColor: "#F5F4F6",
    borderColor: "#170C3A"
  }
};

class AddTool extends Component {
  state = {
    name: "",
    link: "",
    description: "",
    tags: []
  };

  sendForm(event) {
    event.preventDefault();
    this.props.addNewToolRequest(this.state);
  }

  render() {
    return (
      <ReactModal
        appElement={document.getElementById("root")}
        isOpen={this.props.state.openModalAdd}
        style={customStyles}
      >
        <Fragment>
          <div id="modalTitle">
            <img src={addIcn} alt="Add new Tool" id="newToolIcn" />
            <h1 id="title">Add new tool</h1>
          </div>
          <form>
            <div id="formTool">
              <p className="inputLabel">Tool Name</p>
              <input
                type="text"
                placeholder="Insert here the tool name"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <p className="inputLabel">Tool Link</p>
              <input
                type="text"
                placeholder="Insert here the link"
                onChange={e => this.setState({ link: e.target.value })}
              />
              <p className="inputLabel">Tool Description</p>
              <textarea
                name="description"
                id="description"
                cols="50"
                rows="10"
                placeholder="Describe here the tool"
                onChange={e => this.setState({ description: e.target.value })}
              />
              <p className="inputLabel">Tags</p>
              <input
                type="text"
                placeholder="Insert here the tags"
                onChange={e => this.setState({ tags: e.target.value })}
              />
            </div>
            <button
              type="submit"
              id="btnAddTool"
              onClick={e => this.sendForm(e)}
            >
              Add Tool
            </button>
          </form>
        </Fragment>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  state: state.lists
});

const mapDispatchToProps = dispatch => bindActionCreators(AddActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTool);
