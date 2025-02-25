// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import StudentFunc from "./components/StudentFunc";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";
// import MyCard from "./components/card/MyCard";

import { useState } from "react";
import BookInput from "./components/book/BookInput";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";
import "./App.css";

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮1！！");
  // };

  const [books, setBooks] = useState([]); // 存储所有图书
  const [selectedBook, setSelectedBook] = useState(null); // 当前选中的图书

  // 添加图书
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // 删除图书
  const deleteBook = (book) => {
    setBooks(books.filter((b) => b !== book));
    setSelectedBook(null);
  };

  // 编辑图书
  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b === selectedBook ? updatedBook : b)));
    setSelectedBook(null);
  };

  return (
    <>
      {/* <WelcomeClass name="World" /> */}
      {/* <WelcomeFunc name="World" /> */}
      {/* <StudentFunc
        name="顾克"
        age="20"
        image="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/yz.jpg"
      /> */}
      {/* <RandomName /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button onClick={handleClick} />
      <UserPage /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <RegistPage /> */}
      {/* <MyCard
        header={<h2>卡片标题</h2>}
        body={<p>主要内容</p>}
        footer={<button onClick={handleClick}>点击我</button>}
      /> */}

      <div className="app">
        <h1>图书管理系统</h1>
        <BookInput addBook={addBook} />
        <BookList
          books={books}
          onSelectBook={setSelectedBook}
          onDeleteBook={deleteBook}
        />
        {selectedBook && (
          <BookDetail book={selectedBook} onUpdateBook={updateBook} />
        )}
      </div>
    </>
  );
};

export default App;
