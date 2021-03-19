import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFaculty, updateFaculty } from "../../actions/facultyAction";
import { getBranches } from "../../actions/branchAction";
import Header from "../layout/header";

class UpdateFaculty extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      branchId: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log(id);
    this.props.getFaculty(id, this.props.history);
    this.props.getBranches();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { id, firstName, email, password, branchId } = nextProps.faculty;

    this.setState({
      id,
      firstName,
      email,
      password,
      branchId,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const updatedFaculty = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      branchId: this.state.branchId,
    };
    this.props.updateFaculty(this.state.id, updatedFaculty, this.props.history);
  };

  render() {
    const { branches } = this.props.branch;
    let branchList = branches.map((branch, i) => {
      return (
        <option key={i} value={branch.id}>
          {branch.branchName}
        </option>
      );
    });

    return (
      <React.Fragment>
        <Header />
        <div class="container">
          <h4> Edit Faculty Details</h4>
          <hr size="2" />

          <form>
            <label>Faculty Name:</label>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                id=""
                value={this.state.firstName}
                onChange={this.onChange}
                placeholder="Enter Faculty Name"
              />
              <br />
              <label>Branch:</label>
              <select
                id="selectBranch"
                name="branchId"
                value={this.state.branchId}
                onChange={this.onChange}
              >
                {branchList}
              </select>

              <br />
              <label>Email ID:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id=""
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Enter Email ID"
                />
                <br />
                <label>Password:</label>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="password"
                    id=""
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder="Enter Password"
                  />
                  <br />
                  <button
                    class="btn btn-default"
                    id="addBranch"
                    onClick={this.onSubmit}
                  >
                    Update Faculty{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

UpdateFaculty.propTypes = {
  faculty: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  getFaculty: PropTypes.func.isRequired,
  updateFaculty: PropTypes.func.isRequired,
  getBranches: PropTypes.func.isRequired,
  branch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty.faculty,
  error: state.error,
  branch: state.branch,
});

export default connect(mapStateToProps, {
  getFaculty,
  updateFaculty,
  getBranches,
})(UpdateFaculty);
