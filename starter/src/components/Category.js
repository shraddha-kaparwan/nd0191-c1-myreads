import Card from "./Card";

const Category = ({books, title, updateAllBooks}) => {
    
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map(book => {
            return (<Card card={book} key={book.id} updateAllBooks={updateAllBooks}/>)
          })}
          </ol>
        </div>
      </div>
    )
}

export default Category

