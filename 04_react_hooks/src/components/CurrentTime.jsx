import { useState, useEffect } from "react";

const CurrentTime = () => {
  // 使用 useState 存储当前时间
  const [currentTime, setCurrentTime] = useState(new Date());

  // 使用 useEffect 设置定时器，每秒更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // 每秒更新当前时间
    }, 1000);

    // 清除定时器，防止内存泄漏
    return () => clearInterval(timer);
  }, []); // 空依赖数组表示只在组件挂载和卸载时执行

  // 格式化时间为 "HH:mm:ss" 格式
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0"); // 小时，补零
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 分钟，补零
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 秒，补零
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime(currentTime)}</h1> {/* 显示格式化后的时间 */}
    </div>
  );
};

export default CurrentTime;
