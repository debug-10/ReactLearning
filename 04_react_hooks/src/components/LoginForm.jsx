import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
  const { setUser } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // 添加密码状态

  const handleLogin = () => {
    // 简单的验证逻辑：用户名和密码不能为空
    if (username.trim() !== "" && password.trim() !== "") {
      setUser({ name: username }); // 登录成功后更新用户信息
      alert("登录成功！"); // 可选：提示用户登录成功
    } else {
      alert("用户名和密码不能为空！"); // 提示用户输入完整信息
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="请输入用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default LoginForm;
