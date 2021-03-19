import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="sideNavbar" id="sideNavbar">
      <Link to="/" id="webName">
        Internship PORTAL
      </Link>
      <br />
      <Link to="/studentProfile">
        <FontAwesomeIcon icon="columns" /> Dashboard
      </Link>
      <Link to="/enrollStudentActivity">
        <FontAwesomeIcon icon="calendar-plus" /> Enroll for Internship
      </Link>
      <Link to="/studentActivityStatus">
        <FontAwesomeIcon icon="calendar-times" /> Internship Status
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon="calendar-check" /> Approved Internship
      </Link>
    </div>
  );
}
