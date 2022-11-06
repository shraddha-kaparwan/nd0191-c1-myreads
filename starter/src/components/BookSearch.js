import {Link} from "react-router-dom"
import { useEffect, useState} from "react"
import { search } from "../BooksAPI";
import Card from "./Card";

const BookSearch = ({allBooks,updateAllBooks}) => {
  const [searhResults, setSearchResults] = useState([]);
  const [value,setValue] = useState("")

  
  useEffect(()=> {
    if(value.length > 0 && searhResults instanceof Array) {
        search(value).then(data => {
            data.map(item => {
            const checkItem = allBooks.find(book => book.id === item.id)
            if (checkItem) {
              item.shelf = checkItem.shelf
            }  else {
              item.shelf = "none"
          }
          return item
        })
      setSearchResults(data)
      })
     .catch(error => setSearchResults([]))
    }
    else {
      setSearchResults([])
    }
  },[value, allBooks, searhResults.length])


    return (
        <div>
          <div className="search-books-bar">
            <Link className="close-search" to="/"></Link>
            <div className="search-books-input-wrapper">
                <form action="">
              <input
                type="text"
                placeholder="Enter book info to search"
                onChange={(e) => setValue(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {searhResults.length === 0 && value !== "" ? (<p>Book not found</p>) : (<></>) }
            { searhResults && searhResults.length > 0 && searhResults.map(searchResult => (
                <Card card={searchResult} key={searchResult.id} updateAllBooks={updateAllBooks}/> )) }
            </ol>
          </div>
        </div>
    )
}

export default BookSearch
