import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return(
       <div class="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        published={book.volumeInfo.authors}
                        author={book.volumeInfo.publishedDate}
                    />
                })
            }
       </div>
    )
}

export default BookList;