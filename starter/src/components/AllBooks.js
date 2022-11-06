import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import Category from "./Category";


const AllBooks = ({allBooks,updateBooks}) => {
  const [ currentlyReading, setCurrentlyReading ] = useState([]);
  const [ wantToRead, setWantToRead ] = useState([]);
  const [ read, setRead ] = useState([]);

  useEffect(() => {
    setCurrentlyReading([]);
    setWantToRead([]);
    setRead([]);
    allBooks.filter(books => books.shelf !== "none").forEach(book => {
      if (book.shelf === 'currentlyReading') {
        setCurrentlyReading(currentlyReading => [...currentlyReading, book]);
    } else if (book.shelf === 'wantToRead') {
        setWantToRead(wantToRead => [...wantToRead, book]);
    } else if (book.shelf === 'read') {
        setRead(read => [...read, book]);
    } else if (book.shelf === 'none') {
      return;
    }
    })
  },[allBooks])

    return (
    <div className="list-books">
          <div className="list-books-title">
          <h1>My Books</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Category title="Reading Now" books={currentlyReading} updateAllBooks={updateBooks}/>
              <Category title="Finished" books={read} updateAllBooks={updateBooks} />
              <Category title="Wish List" books={wantToRead} updateAllBooks={updateBooks} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/bookSearch">Find a book</Link>
          </div>
        </div>
  )
}

export default AllBooks

