import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";

import NavBar from "../components/NavBar";
import BlogList from "../components/BlogList";
import BlogDetails from "../pages/BlogDetails";

const AppRouters = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    localStorage.removeItem("loggedInUser");
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && loggedInUser !== "false") {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
        }
      />
      {isLoggedIn ? (
        <>
          <Route path="/" element={<Navigate to="/bloglist" />} />
          <Route
            path="/bloglist"
            element={
              <>
                <NavBar username={username} />
                <BlogList />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar username={username} />
                <About />
              </>
            }
          />
          <Route
            path="/book/:bookId"
            element={
              <>
                <NavBar username={username} />
                <Book />
              </>
            }
          />
          <Route
            path="/blog/:blogIndex"
            element={
              <>
                <NavBar username={username} />
                <BlogDetails />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NavBar username={username} />
                <NotFound />
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <NavBar username={username} />
                <DashBoard />
              </>
            }
          >
            <Route path="setting" element={<Setting />} />

            <Route path="profile" element={<Profile />}>
              <Route index element={<Fans />} />
              <Route path="fans" element={<Fans />} />
              <Route path="follow" element={<Follow />} />
            </Route>
          </Route>
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default AppRouters;
