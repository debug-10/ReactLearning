// 导入必要的 React Hooks
import { useState, useEffect } from "react";
import "./DataFetcher.css";

// 创建 DataFetcher 组件
const DataFetcher = () => {
  // 定义状态：posts 用于存储文章数据，loading 用于加载状态，error 用于错误处理
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 发起 GET 请求获取文章数据
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP 错误：${response.status}`);
        }

        // 解析 JSON 响应
        const data = await response.json();

        // 更新状态
        setPosts(data);
        setLoading(false);
      } catch (err) {
        // 错误处理
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
      <h2>文章列表</h2>
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

export default DataFetcher;
