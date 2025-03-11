import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";

const NavBar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=zhangsan&age=20"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/book/123"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book
        </NavLink>
      </div>
      {username && (
        <div className="user-info">
          <span className="username">欢迎, {username}</span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
