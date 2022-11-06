import "./App.css";
import { useState, useEffect } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {getAll} from "./BooksAPI";
import AllBooks from "./components/AllBooks";
import BookSearch from "./components/BookSearch";

const App = () => {
  const [allBooks, setAllBooks] = useState([])
  
  const updateBooks = () => {
    getAll().then(result => setAllBooks(result));
  }
  
  useEffect (() => {
  updateBooks();
  }, [allBooks.length])
  
    return (
      <BrowserRouter>
        <Routes>
         <Route exact path="/" element={<AllBooks allBooks={allBooks} updateBooks={updateBooks}/>}/>
         <Route path="/bookSearch" element={<BookSearch allBooks={allBooks} updateAllBooks={updateBooks}/>} />
         </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;
