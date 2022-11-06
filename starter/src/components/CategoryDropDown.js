import React from 'react'
import {update} from "../BooksAPI"


const CategoryDropDown = ({book, updateAllBooks}) => {
        function handleChange(event) {
            update(book, event.target.value).then(updateAllBooks);
        }
    
        return (
            <select defaultValue={`${book.shelf}`} onChange={handleChange}>
                    <option value="currentlyReading">Reading Now</option>
                    <option value="wantToRead">Wish List</option>
                    <option value="read">Finished</option>
                    <option value="none">None</option>
            </select>
    )
    
    }
    
export default CategoryDropDown