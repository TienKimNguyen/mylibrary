import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return(
       <div className="list row">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        published={book.volumeInfo.publishedDate}
                        author={book.volumeInfo.authors}
                    />
                })
            }
            {
                props.error && <p className="books__error">{props.error}</p>
            }
       </div>
    )
}

export default BookList;