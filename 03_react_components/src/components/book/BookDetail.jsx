import { useState } from "react";

function BookDetail({ book, onUpdateBook }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { title, author, year };
    onUpdateBook(updatedBook);
  };

  return (
    <div className="book-detail">
      <h2>编辑图书信息</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">保存</button>
      </form>
    </div>
  );
}

export default BookDetail;
