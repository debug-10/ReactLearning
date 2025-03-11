import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../App.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="profile-nav">
        <NavLink to="fans" activeClassName="active" className="nav-link">
          fans
        </NavLink>
        <NavLink to="follow" activeClassName="active" className="nav-link">
          follow
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
