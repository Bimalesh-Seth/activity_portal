import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import SideNav from "./StudentSideNav";
import TopNav from "./StudentTopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEnrollActivitiesStatus,
  deleteEnrollActivity,
} from "../../actions/studentActivityAction";

class StudentActivityStatus extends Component {
  componentDidMount() {
    // const { id } = this.props.security.user;
    this.props.getEnrollActivitiesStatus();
  }

  onDeleteClick(id) {
    this.props.deleteEnrollActivity(id);
  }

  render() {
    const { enrollStatus } = this.props.student;
    console.log(enrollStatus);
    // const { Activities } = enrollStatus;
    // let activityList = Activities.map((activity) => )
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav />
          <div className="maindivs" id="pageHeading">
            {" "}
            Pending/Rejected Activties:{" "}
          </div>

          <div className="maindivs">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Activity Name</th>
                    <th>Status</th>
                    <th>Category Name</th>
                    <th>Start Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollStatus.map((enroll) => (
                    <tr>
                      <td>{enroll.id}</td>
                      <td>{enroll.title}</td>
                      <td>
                        <button className={enroll.Activities[0].status === null ? "btn btn-primary" : "btn btn-danger"}>
                          {enroll.Activities[0].status === null ? "Pending" : "Rejected"}
                        </button>
                      </td>
                      <td>{enroll.Category.categoryName}</td>
                      <td>{enroll.sDate}</td>
                      <td>
                        <FontAwesomeIcon
                          icon="trash"
                          onClick={this.onDeleteClick.bind(this, enroll.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

StudentActivityStatus.propTypes = {
  getEnrollActivitiesStatus: PropTypes.func.isRequired,
  deleteEnrollActivity: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  student: state.student,
  security: state.security
});

export default connect(mapStateToProps, {
  getEnrollActivitiesStatus,
  deleteEnrollActivity,
})(StudentActivityStatus);
