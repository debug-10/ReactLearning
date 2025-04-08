// 导入必要的依赖
import { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetcher.css";

// 创建 AxiosDataFetch 组件
const AxiosDataFetch = () => {
  // 定义状态：posts 用于存储文章数据，loading 用于加载状态，error 用于错误处理
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 使用 axios 发起 GET 请求获取文章数据
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // 只取前5条数据
        const limitedData = response.data.slice(0, 5);

        // 更新状态
        setPosts(limitedData);
        setLoading(false);
      } catch (err) {
        // 错误处理 - axios 的错误对象包含在 err.message 中
        setError(err.message);
        setLoading(false);
      }
    };

    // 调用获取数据函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行

  // 渲染加载状态
  if (loading) {
    return <div>数据加载中...</div>;
  }

  // 渲染错误状态
  if (error) {
    return <div>错误: {error}</div>;
  }

  // 渲染文章列表
  return (
    <div className="posts-container">
      <h2>文章列表 (Axios - 前5条)</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosDataFetch;
