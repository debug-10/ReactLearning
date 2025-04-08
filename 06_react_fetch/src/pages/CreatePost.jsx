import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/api";
import "./pages.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await createPost({
        title,
        body,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <div className="create-post">
      <h2>创建新文章</h2>
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
          {submitting ? "提交中..." : "创建文章"}
        </button>
      </form>
    </div>
  );
};

export { CreatePost as default };
