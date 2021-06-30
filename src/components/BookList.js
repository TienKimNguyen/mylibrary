import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {

    return(
        <div>
            <div className="list row">
                {
                    props.books.map((book, i) => {
                        return (
                            <div className="bookCard-col col-lg-3 col-md-4 col-sm-6">
                                <BookCard 
                                    key={i}
                                    book={book}
                                    change={props.change}
                                    handleFavClick = {props.handleFavClick}
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
                            </div>                                                 
                        );
                    })
                }
            </div>
        </div>
    )
}

export default BookList;