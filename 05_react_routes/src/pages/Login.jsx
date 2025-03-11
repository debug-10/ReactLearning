import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/user";
import "./Login.css";

const Login = ({ setIsLoggedIn, setUsername }) => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === inputUsername && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", inputUsername);
      setIsLoggedIn(true);
      setUsername(inputUsername);
      navigate("/dashboard", { state: { username: inputUsername, age: 30 } });
    } else {
      setError("登录信息错误");
    }
  };

  return (
    <div className="login-container">
      <h2>登陆页面</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>用户名:</label>
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>密码:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          登录
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
