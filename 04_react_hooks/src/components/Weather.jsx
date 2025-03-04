import { useState, useEffect } from "react";

const Weather = () => {
  // 使用 useState 管理城市名称、天气数据和加载状态
  const [city, setCity] = useState("Nanjing"); // 默认城市为南京
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OpenWeatherMap API Key
  const API_KEY = "641f2b27939ede5c79a5cb09be1d2f47";

  // 使用 useEffect 在组件加载时默认获取南京的天气数据
  useEffect(() => {
    fetchWeather("Nanjing");
  }, []);

  // 调用天气 API 获取数据
  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError("请输入城市名称");
      return;
    }

    setLoading(true); // 开始加载
    setError(null); // 清空错误信息

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("城市未找到，请检查输入");
      }

      const data = await response.json();
      setWeatherData(data); // 更新天气数据
    } catch (error) {
      setError(error.message); // 设置错误信息
      setWeatherData(null); // 清空天气数据
    } finally {
      setLoading(false); // 结束加载
    }
  };

  // 处理输入框内容变化
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // 处理查询按钮点击
  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <h1>天气查询</h1>
      {/* 输入框和查询按钮 */}
      <div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="输入城市名称"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "查询中..." : "查询"}
        </button>
      </div>

      {/* 显示错误信息 */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* 显示天气信息 */}
      {weatherData && (
        <div>
          <h3>{weatherData.name} 的天气</h3>
          <p>温度: {weatherData.main.temp}°C</p>
          <p>天气: {weatherData.weather[0].description}</p>
          <p>湿度: {weatherData.main.humidity}%</p>
          <p>风速: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
