import React, { Component } from "react";
import FacultySideNav from "./FacultySideNav";
import FacultyTopNav from "./FacultyTopNav";
import { getBranches } from "../../actions/branchAction";
import { getSemesters } from "../../actions/semesterAction";
import { getStudentsEnrolledActivity,approveStudentActivity } from "../../actions/facultyActivityAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class RejectedStudent extends Component {
  constructor() {
    super();
    this.state = {
      branchId: "",
      semesterId: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const pendingData = {
      facultyId: 1,
      activityDetailId: id,
      status: null,
      branchId: this.state.branchId,
      semesterId: this.state.semesterId,
    };
    //console.log(pendingData);
    this.props.getStudentsEnrolledActivity(pendingData);
  };

  componentDidMount() {
    this.props.getBranches();
    this.props.getSemesters();
    const { id } = this.props.match.params;
    const pendingData = {
      facultyId: 1,
      activityDetailId: id,
      status: false,
      branchId: this.state.branchId,
      semesterId: this.state.semesterId,
    };
    //console.log(pendingData);
    this.props.getStudentsEnrolledActivity(pendingData);
  }

  componentWillReceiveProps(){
    const { id } = this.props.match.params;
    const rejectedData = {
      facultyId: 1,
      activityDetailId: id,
      status: false,
      branchId: this.state.branchId,
      semesterId: this.state.semesterId,
    };
    //console.log(pendingData);
    this.props.getStudentsEnrolledActivity(rejectedData);
  }

  onDisplay(certificateLink){
    window.open(certificateLink, "_blank");
  }

  onApprove(id){
    //console.log(id);
    const approveStudent = {
      activityId:id,
      status:true,
      comment:"",
    }
    this.props.approveStudentActivity(approveStudent,this.props.history);
  }

  onPending(id){

    const pendingStudent = {
      activityId:id,
      status:null,
      comment:"",
    }
    this.props.approveStudentActivity(pendingStudent,this.props.history);
  }


  render() {
    const { id, forAll } = this.props.match.params;

    const { branches } = this.props.branch;
    const { semesters } = this.props.semester;

    const branchList = branches.map((branch) => (
      <option value={branch.id}>{branch.branchName}</option>
    ));

    const semesterList = semesters.map((semester) => (
      <option value={semester.id}>{semester.semester}</option>
    ));

    const forAllTrue = (
      <div className="maindivs">
        <div className="row">
          <div className="col-md-2">
            <select
              id="sortdrp"
              name="branchId"
              value={this.state.branchId}
              onChange={this.onChange}
            >
              <option value="">Sort By Branch</option>
              {branchList}
            </select>
          </div>

          <select
            id="sortdrp"
            name="semesterId"
            value={this.state.semesterId}
            onChange={this.onChange}
          >
            <option value="">Sort By Semester</option>
            {semesterList}
          </select>
        </div>

        <button className="btn btn-light" id="search" onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );

    const forAllFalse = (
      <div className="maindivs">
        <div className="row">
          <div className="col-md-2">
            <select
              id="sortdrp"
              name="semesterId"
              value={this.state.semesterId}
              onChange={this.onChange}
            >
              <option value="">Sort By Semester</option>
              {semesterList}
            </select>
          </div>
        </div>

        <button className="btn btn-light" id="search" onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );
    let ToUse;
    ToUse = parseInt(forAll) ? forAllTrue : forAllFalse;

    const { pendingEnrollStudent } = this.props.facultyOperation;
 
    const { Students, docRequired, title } = pendingEnrollStudent;
  
    const PendingStundents =
      Students &&
      Students.map((student) => (
        <tr>
          <td>{student.erpId}</td>
          <td>{student.firstName} {student.lastName}</td>
          <td>{student.studentType}</td>
          <td>{student.division}</td>
          <td>{student.rollNo}</td>
          <td>
            {docRequired ? (
              <button className="btn btn-primary mr-1" onClick={this.onDisplay.bind(this, student.Activity.certificate)}>Display</button>
            ) : null}
            <button className="btn btn-success mr-1" onClick={this.onApprove.bind(this,student.Activity.id)} >Approve</button>
            <button className="btn btn-danger mr-1"  onClick={this.onPending.bind(this,student.Activity.id)}>Add to Pending</button>
          </td>
        </tr>
      ));

    return (
      <React.Fragment>
        <FacultySideNav aid={id} forAll={forAll} />
        <div id="main" className="openmain">
          <FacultyTopNav />

          {ToUse}
          <div className="maindivs">
            <b>Rejected Student:</b> {title}
            <br />
            <br />
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Student Name</th>
                    <th>Admission Type</th>
                    <th>Division</th>
                    <th>Roll No. </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{PendingStundents}</tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

RejectedStudent.propTypes = {
  getBranches: PropTypes.func.isRequired,
  branch: PropTypes.object.isRequired,
  getSemesters: PropTypes.func.isRequired,
  semester: PropTypes.object.isRequired,
  getStudentsEnrolledActivity: PropTypes.func.isRequired,
  facultyOperation: PropTypes.object.isRequired,
  approveStudentActivity:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  branch: state.branch,
  semester: state.semester,
  facultyOperation: state.facultyOperation,
});

export default connect(mapStateToProps, {
  getBranches,
  getSemesters,
  getStudentsEnrolledActivity,
  approveStudentActivity
})(RejectedStudent);
