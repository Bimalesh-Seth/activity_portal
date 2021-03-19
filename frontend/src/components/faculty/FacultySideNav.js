import React from "react";
import { Link } from "react-router-dom";

export default function FacultySideNav(props) {
  const aid = props.aid;
  const forAll = props.forAll;
  //console.log(aid);
  return (
    <div id="sideNavbar" className="sideNavbar">
      <Link to="/" className="webName">
        ACTIVITY PORTAL
      </Link>
      <br />
      <Link to="/facultyProfile">Dashboard</Link>
      <Link to={`/pendingApproval/${aid}/${forAll}`}>Pending Approval</Link>
      <Link to={`/rejectedStudents/${aid}/${forAll}`}>Rejected Students</Link>
      <Link to={`/approvedStudents/${aid}/${forAll}`}>Approved Students</Link>
      <Link to={`/activityDetails/${aid}/${forAll}`}>Activity Details</Link>
    </div>
  );
}
