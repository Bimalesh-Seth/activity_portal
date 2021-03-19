import React, { Component } from "react";
import FacultyDashSideNav from "./FacultyDashSideNav";
import FacultyTopNav from "./FacultyTopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllotedActivities } from "../../actions/facultyActivityAction";
import {getFaculty} from "../../actions/facultyAction";
import { Link } from "react-router-dom";

class FacultyLoginDash extends Component {

  componentDidMount(){
    //const id = this.props.security.user.id;

    this.props.getFaculty();
    this.props.getAllotedActivities();

  }
  
  render() {
    const { ActivityDetails } = this.props.faculty.facultyActivityAlloted;
    //console.log(ActivityDetails);
    const AllotedActivityCard =
      ActivityDetails &&
      ActivityDetails.map((activity) => (
        <Link to={`/pendingApproval/${activity.id}/${activity.FactActMap.forAll ? '1' : '0' }`}>
          {" "}
          <div className="actCard">
            <h5>{activity.title}</h5>
            <p>
              Multicon-W
              <br />
              Start Date : {activity.sDate}
              <br />
              End Date : {activity.eDate}
            </p>
          </div>
        </Link>
      ));

      const {faculty} = this.props.faculty;
      console.log(faculty[0]);
    
    return (
      <React.Fragment>
        <FacultyDashSideNav />
        <div id="main" className="openmain">
      
          <FacultyTopNav firstname={faculty.firstName} lastname={faculty.lastName} />
          <div className="maindivs">
            <div className="row">
              <div className="col-md-9">
                <h5>Activities:</h5>
              </div>
              <input type="text" placeholder="Search" id="searchBtn" required />
              <button className="btn btn-light" id="search">
                Search
              </button>
            </div>
          </div>

          <div className="maindivs">
            <div id="listOfAct">{AllotedActivityCard}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

FacultyLoginDash.propTypes = {
  getAllotedActivities: PropTypes.func.isRequired,
  getFaculty:PropTypes.func.isRequired,
  faculty: PropTypes.object.isRequired,
  security:PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty,
  security:state.security,
});

export default connect(mapStateToProps, { getAllotedActivities,getFaculty })(
  FacultyLoginDash
);
