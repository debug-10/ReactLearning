import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostDetail, updatePost } from "../api/api";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostDetail(id);
        setTitle(data.title);
        setBody(data.body);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await updatePost(id, {
        title,
        body,
      });
      navigate(`/post/${id}`);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div>数据加载中...</div>;
  }

  return (
    <div className="create-post">
      <h2>编辑文章</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            标题：
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body" className="form-label">
            内容：
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" disabled={submitting} className="submit-button">
          {submitting ? "提交中..." : "更新文章"}
        </button>
      </form>
    </div>
  );
};

export default EditPost;
