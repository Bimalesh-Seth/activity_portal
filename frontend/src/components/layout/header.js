import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
        <Link to="/" className="logo">
          <b>Activity Portal</b>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/branchDashboard">Branch</Link>
        <Link to="/degreeDashboard">Degree</Link>
        <Link to="/facultyDashboard">Faculty</Link>
        <Link to="/studentDashboard">Student</Link>
        <Link to="/activityDashboard">Activity</Link>

        {/*<a style="float: right">Hello,<b> Admin !</b></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
</a> */}
      </div>
    );
  }
}

export default Header;
