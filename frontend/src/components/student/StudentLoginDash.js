import React, { Component } from "react";
import SideNav from "./StudentSideNav";
import TopNav from "./StudentTopNav";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getStudent} from "../../actions/studentAction";


class StudentLoginDash extends Component {

  componentDidMount(){
  }


  render() {
   // const {firstName, lastName} = this.props.student.student;
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav  />

          <div class="row">
            <div class="col-md-6">
              <div class="maindivs">
                <h5>Your Internship Progress:</h5>
                <p>
                  You have to complete the targeted points so that you can
                  complete your internship.
                </p>

                <progress
                  class="progress-bar progress-bar-success"
                  id="ptsprogress"
                  value="32"
                  max="100"
                >
                  32%
                </progress>
                <div class="progresspts">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="completedPts">
                  <h1>30</h1>
                  Points completed till now
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="tobecompleted">
                  <h1>70</h1>
                  Points to be complete
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="noofact">
                  <h1>1</h1>
                  Internship Enrolled
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

StudentLoginDash.propTypes = {
  student:PropTypes.object.isRequired,
  getStudent:PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  student:state.student,
  security:state.security,
})

export default connect(mapStateToProps, {getStudent})(StudentLoginDash);
