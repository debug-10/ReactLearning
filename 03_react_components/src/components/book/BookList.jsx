import BookItem from "./BookItem";

function BookList({ books, onSelectBook, onDeleteBook }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          onSelectBook={onSelectBook}
          onDeleteBook={onDeleteBook}
        />
      ))}
    </div>
  );
}

export default BookList;
