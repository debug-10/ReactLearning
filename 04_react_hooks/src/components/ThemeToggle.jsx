import { useState } from "react";

const ThemeToggle = () => {
  // 使用useState 这个Hook 来存储主题状态
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>aaa</h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "黑夜"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
