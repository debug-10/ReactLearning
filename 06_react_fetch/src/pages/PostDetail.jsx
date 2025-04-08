import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostDetail } from "../api/api";
import "./pages.css";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostDetail(id);
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>数据加载中...</div>;
  }

  if (error) {
    return <div>错误: {error}</div>;
  }

  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">
        ← 返回列表
      </Link>
      <h1>{post.title}</h1>
      <div className="post-content">
        <p>{post.body}</p>
      </div>
      <button onClick={() => navigate(`/edit/${id}`)} className="edit-button">
        编辑文章
      </button>
    </div>
  );
};

export default PostDetail;
