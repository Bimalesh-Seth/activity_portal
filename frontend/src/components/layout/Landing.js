import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  componentWillUnmount() {}

  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">TCET Activity Portal</h1>
                <p className="lead">
                  Create your account to join activity portal.
                </p>
                <hr />
                <Link to="/admin" className="btn btn-lg btn-primary mr-2">
                  Admin Redirect
                </Link>
                <Link
                  to="/studentProfile"
                  className="btn btn-lg btn-secondary mr-2"
                >
                  Student Redirect
                </Link>
                <Link
                  to="/facultyProfile"
                  className="btn btn-lg btn-primary mr-2"
                >
                  Faculty Redirect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
