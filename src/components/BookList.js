import React, {useState} from 'react';
import BookCard from './BookCard';
import { Button, Card } from "react-bootstrap";
import BookDetail from "./BookDetail";
const BookList = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
            <div className="list row">
                {
                    props.books.map((book, i) => {
                        return (
                            <div key={i} className="bookCard-col col-lg-3 col-md-4 col-sm-6">
                                <Card border="light" style={{ width: '18rem' }} className="card-container">
                                    <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} className="book-image"/>
                                    <Card.Body>
                                        <>
                                            <Button variant="outline-dark" size = "sm" onClick={() => props.handleFavClick(book)}>
                                                Add
                                            </Button>
                                            <Button variant="outline-dark" size = "sm" onClick={() => setModalShow(true)}>
                                                More Info
                                            </Button>

                                            <BookDetail
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
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </>
                                    </Card.Body>
                                </Card>
                            </div>                           
                        );

                        {/* <BookCard 
                            key={i}
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
                        /> */}
                    })
                }
                
            </div>
            
        </div>

    )
}

export default BookList;