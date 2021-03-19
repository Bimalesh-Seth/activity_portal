import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacultyTable from "./FacultyTable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVerifiedFaculties } from "../../actions/facultyAction";
import Header from "../layout/header";

class FacultyDashboard extends Component {
  componentDidMount() {
    const verifiedFaculty = {
      "verified": true,
      "branchId": null,
    }
    this.props.getVerifiedFaculties(verifiedFaculty);
  }

  render() {
    const { faculties } = this.props.faculty;

    // const FacultyTableDisplay = () => {
    //   return (
    //     <div>
    //       {faculties.map((faculty) => (
    //         <FacultyTable key={faculty.id} faculty={faculty} />
    //       ))}
    //     </div>
    //   );
    // };

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>
            <FontAwesomeIcon icon="chalkboard-teacher" /> <span>Faculty</span>
          </h4>

          {/* <!--BUTTON TO ADD --> */}
          <Link to="/addFaculty">
            <button className="btn btn-default" id="addBranch">
              Add Faculty
              <FontAwesomeIcon icon="plus" />
            </button>
          </Link>

          <Link to="/verifyFaculty">
            <button className="btn btn-default" id="addStudent" style={{ width: "auto" }}>
              Verify Registered Faculty <FontAwesomeIcon icon="check" />
            </button>
          </Link>

          <hr size="2" />

          {/* <div className="tableControl">
            <div className="row">
              <div className="col-md-9">
                <select>
                  <option value="">Sort By Branch</option>
                  
                  <option value="">Mechanical Engineering</option>
                  <option value="">Computer Engineering</option>
                </select>
              </div>
            </div>
         </div> */}
          <br />

          <FacultyTable faculties={faculties} />
        </div>
      </React.Fragment>
    );
  }
}

FacultyDashboard.propTypes = {
  getVerifiedFaculties: PropTypes.func.isRequired,
  faculty: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty,
});

export default connect(mapStateToProps, { getVerifiedFaculties })(FacultyDashboard);
