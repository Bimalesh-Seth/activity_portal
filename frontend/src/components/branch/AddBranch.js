import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBranch } from "../../actions/branchAction";

class AddBranch extends Component {
  constructor() {
    super();

    this.state = {
      branchName: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    const newBranch = {
      branchName: this.state.branchName,
    };
    this.setState({ branchName: "" });
    //console.log(newBranch);
    this.props.addBranch(newBranch, this.props.history);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <input
            type="text"
            name="branchName"
            id="branchName"
            value={this.state.branchName}
            onChange={this.onChange}
            class="form-control"
            placeholder="Enter Branch Name"
          />
        </div>
        <button
          className="btn btn-default"
          id="addBranch"
          onClick={this.onClick}
        >
          Add Branch <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

AddBranch.propTypes = {
  addBranch: PropTypes.func.isRequired,
  branch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  branch: state.branch,
});

export default connect(mapStateToProps, { addBranch })(AddBranch);
