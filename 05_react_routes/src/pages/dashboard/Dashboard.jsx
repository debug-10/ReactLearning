import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../App.css";
const Dashboard = () => {
  const location = useLocation();
  const { username, age } = location.state || {}; //没传参给空对象

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        Welcome:{username},{age}
      </h3>
      <nav>
        <NavLink to="profile" activeClassName="active">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
