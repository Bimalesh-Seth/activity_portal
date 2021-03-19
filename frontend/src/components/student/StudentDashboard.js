import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudentTable from "./StudentTable";
import PropTypes from "prop-types";
import { getVerifiedStudents } from "../../actions/studentAction";
import { connect } from "react-redux";
import Header from "../layout/header";

class StudentDashboard extends Component {
  componentDidMount() {
    const verifiedStudent = {
      "verified":true,
      "semesterId":null,
      "branchId":null,
      "degreeId":null,
    }
    this.props.getVerifiedStudents(verifiedStudent);
    
  }
  render() {
    const { students } = this.props.student;
    return (
      <React.Fragment>
        <Header />
        <div class="container">
          <h4>Student</h4>
          <br />

          <Link to="/addStudent">
            <button class="btn btn-default" id="addStudent">
              Add Student <FontAwesomeIcon icon="plus" />
            </button>
          </Link>

          <Link to="/verifyStudent">
            <button class="btn btn-default" id="addStudent" style={{ width: "auto"}}>
              Verify Registered Student <FontAwesomeIcon icon="check" />
            </button>
          </Link>


          <hr size="2" />

          <StudentTable students={students} />
        </div>
      </React.Fragment>
    );
  }
}

StudentDashboard.propTypes = {
  getVerifiedStudents:PropTypes.func.isRequired,
  student:PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getVerifiedStudents })(StudentDashboard);
