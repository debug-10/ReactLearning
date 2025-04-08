import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieList } from "../api/movieApi";
import "./pages.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        const data = await getMovieList(1);
        const selectedMovie = data.newslist.find(
          (item) => String(item.id) === id
        );
        if (selectedMovie) {
          setMovie({
            id: selectedMovie.id,
            title: selectedMovie.title,
            content: selectedMovie.description,
            pic: selectedMovie.picUrl,
            src: selectedMovie.source,
            time: selectedMovie.ctime,
          });
        } else {
          setError("未找到该电影信息");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return <div className="glass-container">数据加载中...</div>;
  }

  if (error) {
    return <div className="glass-container error">错误: {error}</div>;
  }

  if (!movie) {
    return <div className="glass-container">未找到电影信息</div>;
  }

  return (
    <div className="movie-detail glass-effect">
      <Link to="/movies" className="back-link">
        返回列表
      </Link>
      <div className="movie-detail-content">
        <img
          src={movie.pic}
          alt={movie.title}
          className="movie-detail-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400?text=暂无图片";
            e.target.onerror = null;
          }}
        />
        <h1>{movie.title}</h1>
        <div className="movie-detail-info">
          <p className="movie-detail-source">来源: {movie.src}</p>
          <p className="movie-detail-time">时间: {movie.time}</p>
        </div>
        <div className="movie-detail-description">
          <p>{movie.content}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
