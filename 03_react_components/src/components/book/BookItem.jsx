function BookItem({ book, onSelectBook, onDeleteBook }) {
  return (
    <div className="book-item" onClick={() => onSelectBook(book)}>
      <h3>{book.title}</h3>
      <p>作者: {book.author}</p>
      <p>出版年份: {book.year}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteBook(book);
        }}
      >
        删除
      </button>
    </div>
  );
}

export default BookItem;
