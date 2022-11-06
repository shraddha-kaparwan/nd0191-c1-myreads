import CategoryDropDown from "./CategoryDropDown.js"


const Card = ({card, updateAllBooks}) => {
return (
    <li>
      <div className="book">
        <div className="book-top">
          {card.imageLinks ? (
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${card.imageLinks.thumbnail}` }}></div>
          ) : (
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://www.kerrylonsdale.com/wp-content/uploads/2015/11/bookcover-placeholder-e1494528547751.png)` }}></div>
          )}
          <div className="book-shelf-changer">
            <CategoryDropDown book={card} updateAllBooks={updateAllBooks} /> 
          </div>
        </div>
          {card.title ? (
            <div className="book-title">{card.title}</div>
            ) : (
            <div className="book-title">No Title</div>
            )}
          {card.authors ? (
            <div className="book-authors">{card.authors.join(", ")}</div>
            ) : (
            <div className="book-authors">Unknown Author</div>
            )}
      </div>
    </li>
        );
}

export default Card
