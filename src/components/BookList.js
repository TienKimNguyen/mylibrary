import React from 'react';
import BookCard from './BookCard';
import PaginationPage from './PaginationComponent';
const BookList = (props) => {
    return(
        <div>
            <div className="list row">
                {
                    props.books.map((book, i) => {
                        return <BookCard 
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            publishedDate={book.volumeInfo.publishedDate}
                            authors={book.volumeInfo.authors}
                            previewLink= {book.volumeInfo.previewLink}
                            publisher= {book.volumeInfo.publisher}
                            length={book.volumeInfo.pageCount}
                            isbn={book.volumeInfo.industryIdentifiers}
                            categories={book.volumeInfo.categories}
                            description={book.volumeInfo.description}
                            rating={book.volumeInfo.averageRating}
                        />
                    })
                }
                {
                    props.error && <p className="books__error">{props.error}</p>
                }
                
            </div>
            <PaginationPage />
        </div>

    )
}

export default BookList;