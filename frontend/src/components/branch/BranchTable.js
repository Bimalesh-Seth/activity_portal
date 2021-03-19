import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBranch } from "../../actions/branchAction";
import UpdateBranch from "./UpdateBranch";

class BranchTable extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
    };
    this.modalAppearance = this.modalAppearance.bind(this);
  }

  onDeleteClick(id) {
    this.props.deleteBranch(id);
  }

  modalAppearance() {
    this.setState({ modalShow: !this.state.modalShow });
    //console.log(this.state.modalShow);
  }

  render() {
    const { branches } = this.props;
    const modalShowNow = () => {
      return (
        <div>
          <UpdateBranch />
        </div>
      );
    };
    let modalResponse;
    if (this.state.modalShow) {
      modalResponse = modalShowNow;
    } else {
      modalResponse = null;
    }

    return (
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Branch</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr>
                <td>{branch.branchName}</td>
                <td>
                  <FontAwesomeIcon
                    icon="pencil-alt"
                    id="editbtn"
                    title="Edit"
                    onClick={this.modalAppearance}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <FontAwesomeIcon
                    icon="trash"
                    id="deletebtn"
                    title="Delete"
                    onClick={this.onDeleteClick.bind(this, branch.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalResponse}
      </div>
    );
  }
}

BranchTable.propTypes = {
  deleteBranch: PropTypes.func.isRequired,
};

export default connect(null, { deleteBranch })(BranchTable);
