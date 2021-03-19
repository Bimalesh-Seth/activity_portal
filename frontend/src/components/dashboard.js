import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "./layout/header";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          {/* <!--THIS IS THE CARD ROW WHICH IS STATIC. ALL BELOW CONTENT WILL BE STATIC--> */}
          <div className="row">
            {/*  <!--Card1 ACTIVITY CARD--> */}
            <div className="col-md-3">
              <div className="cards" id="activityCards">
                <h5>
                  Activity
                  <FontAwesomeIcon icon="calendar-check" />
                </h5>
                <div className="moreinfo">
                  <Link to="/activityDashboard">
                    More Info <FontAwesomeIcon icon="info-circle" />
                  </Link>
                </div>
              </div>
            </div>

            {/*<!--Card2 FACULTY CARD--> */}
            <div className="col-md-3">
              <div className="cards" id="facultyCards">
                <h5>
                  Faculty <FontAwesomeIcon icon="chalkboard-teacher" />
                </h5>
                <div className="moreinfo">
                  <Link to="/facultyDashboard">
                    More Info <FontAwesomeIcon icon="info-circle" />
                  </Link>
                </div>
              </div>
            </div>

            {/*<!--Card3 STUDENT CARD-->*/}
            <div className="col-md-3">
              <div className="cards" id="studentCards">
                <h5>
                  Student <FontAwesomeIcon icon="user-graduate" />
                </h5>
                <div className="moreinfo">
                  <Link to="/studentDashboard">
                    More Info <FontAwesomeIcon icon="info-circle" />
                  </Link>
                </div>
              </div>
            </div>

            {/*<!--Card4 BRANCH CARD-->*/}
            <div className="col-md-3">
              <div className="cards" id="branchCards">
                <h5>
                  Branch <FontAwesomeIcon icon="award" />
                </h5>
                <div className="moreinfo">
                  <Link to="/branchDashboard">
                    More Info <FontAwesomeIcon icon="info-circle" />
                  </Link>
                </div>
              </div>
            </div>

            {/*<!--Card5 DEGREE CARD--> */}
            <div className="col-md-3">
              <div className="cards" id="degreeCards">
                <h5>
                  Degree <FontAwesomeIcon icon="graduation-cap" />
                </h5>
                <div className="moreinfo">
                  <Link to="/degreeDashboard">
                    More Info <FontAwesomeIcon icon="info-circle" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
