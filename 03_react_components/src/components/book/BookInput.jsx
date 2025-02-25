import { useState } from "react";

function BookInput({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, year };
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-input">
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">添加图书</button>
    </form>
  );
}

export default BookInput;
