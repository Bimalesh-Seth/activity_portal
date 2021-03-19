import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteStudent } from "../../actions/studentAction";

class StudentTable extends Component {
  onDeleteClick(id) {
    this.props.deleteStudent(id);
  }

  render() {
    const { students } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Branch</th>
              <th>EmailID</th>
              <th>Mobile No</th>
              <th>Admission Type</th>
              <th>Degree</th>
              <th>ERP ID</th>
            </tr>
          </thead>
          {students.map((student) => (
            <tr>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.Branch.branchName}</td>
              <td>{student.email}</td>
              <td>{student.mobileNo}</td>
              <td>{student.studentType}</td>
              <td>{student.Degree.degreeName}</td>
              <td>{student.erpId}</td>
              <td>
                <Link to={`/updateStudent/${student.id}`}>
                  <FontAwesomeIcon
                    id="editbtn"
                    icon="pencil-alt"
                    title="Edit"
                  />
                </Link>
              </td>
              <td>
                <FontAwesomeIcon
                  id="deletebtn"
                  icon="trash"
                  title="Delete"
                  onClick={this.onDeleteClick.bind(this, student.id)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

StudentTable.propTypes = {
  deleteStudent: PropTypes.func.isRequired,
};

export default connect(null, { deleteStudent })(StudentTable);
