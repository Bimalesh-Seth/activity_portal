import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFaculty } from "../../actions/facultyAction";
import { getBranches } from "../../actions/branchAction";
import Header from "../layout/header";

class AddFaculty extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      erpId: "",
      email: "",
      mobileNo: "",
      password: "",
      branchId: "",
      DOB: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newFaculty = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      erpId: this.state.erpId,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      password: this.state.password,
      branchId: this.state.branchId,
      DOB: this.state.DOB,
    };
    console.log(newFaculty);
    this.props.addFaculty(newFaculty, this.props.history);
  }

  componentDidMount() {
    this.props.getBranches();
  }

  render() {
    const { branches } = this.props.branch;
    console.log(branches.branchId);

    let branchList =
      branches.length > 0 &&
      branches.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.branchName}
          </option>
        );
      }, this);
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>Enter Faculty Details</h4>

          <hr size="2" />

          {/* <!-----------------FORMS STARTS HERE-------------------------> */}

          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-4"><input type="text" placeholder="First Name" id="fname" name="firstName" value={this.state.firstName} onChange={this.onChange} /></div>
              <div className="col-md-4"><input type="text" placeholder="Middle Name" name="middleName" value={this.state.middleName} onChange={this.onChange} /></div>
              <div className="col-md-4"><input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.onChange} /></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="ERP ID" name="erpId" value={this.state.erpId} onChange={this.onChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Email ID" name="email" value={this.state.email} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Mobile Number" name="mobileNo" value={this.state.mobileNo} onChange={this.onChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="password" placeholder="Re-Enter Password" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <select id="selectDrp" name="branchId" value={this.state.branchId} onChange={this.onChange}>
                  <option value="">Branch</option>
                  {branchList}
                </select>
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-md-6">
                Date Of Birth:
                    <input type="date" style={{ marginTop: "0px" }} name="DOB" value={this.state.DOB} onChange={this.onChange} />
              </div>
            </div>

            <br />
            <button className="btn btn-primary" onClick={this.onSubmit}>Register</button>

          </form>
          {/* <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label for="facultyName">Faculty Name:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="facultyName"
                    placeholder="Enter Faculty Name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label for="selectBranch">Branch:</label>
                <select
                  id="selectBranch"
                  name="branchId"
                  value={this.state.branchId}
                  onChange={this.onChange}
                >
                  <option value="">Select Branch</option>
                  {branchList}
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label for="emailID">Email ID:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="emailID"
                    placeholder="Enter Email ID"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label for="Password">Password:</label>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="Password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <br />

            
            <button className="btn btn-default" id="addBranch">
              ADD
            </button>
          </form> */}
        </div>
      </React.Fragment>
    );
  }
}

AddFaculty.propTypes = {
  addFaculty: PropTypes.func.isRequired,
  faculty: PropTypes.object.isRequired,
  getBranches: PropTypes.func.isRequired,
  branch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty,
  branch: state.branch,
});

export default connect(mapStateToProps, { addFaculty, getBranches })(
  AddFaculty
);
