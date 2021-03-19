import React from "react";
import { Link } from "react-router-dom";

export default function FacultyDashSideNav() {
  return (
    <div id="sideNavbar" className="sideNavbar">
      <Link to="/" className="webName">
        ACTIVITY PORTAL
      </Link>
      <br />
    </div>
  );
}
