import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieList } from "../api/movieApi";
import "./pages.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieList(page, 10);
        setMovies(
          data.newslist.map((item) => ({
            id: item.id,
            title: item.title,
            content: item.description,
            pic: item.picUrl,
            src: item.source,
            time: item.ctime,
          }))
        );
        setTotalPages(Math.ceil(data.allnum / 10));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (loading) {
    return <div className="glass-container">数据加载中...</div>;
  }

  if (error) {
    return <div className="glass-container error">错误: {error}</div>;
  }

  return (
    <div className="movie-list-container">
      <h2>影视资讯</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id || movie.title}`}
            key={movie.id || movie.title}
            className="movie-card glass-effect"
            style={{ textDecoration: "none" }}
          >
            <img
              src={movie.pic}
              alt={movie.title}
              className="movie-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x200?text=暂无图片";
                e.target.onerror = null;
              }}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.content}</p>
              <div className="movie-meta">
                <span>{movie.src}</span>
                <span>{movie.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination glass-effect">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="page-button"
        >
          上一页
        </button>
        <span className="page-info">
          第 {page} 页 / 共 {totalPages} 页
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="page-button"
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default MovieList;
