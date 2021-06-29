import * as React from "react";
import { Button, Card } from "react-bootstrap";

import BookDetail from "./BookDetail";

const BookCard = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    // console.log(props.isbn[1].type);
    // const bookISBN = props.isbn[1] !== null ? props.isbn[1].identifier : "N/A";
    return (
             <div className="bookCard-col col-lg-3 col-md-4 col-sm-6">
                <Card border="light" style={{ width: '18rem' }} className="card-container">
                    <Card.Img variant="top" src={props.image} className="book-image"/>
                    <Card.Body>
                        <>
                            <Button variant="outline-dark" size = "sm" onClick={() => props.handleFavClick()}>
                                {props.change === 'add' ? "Add" : "Remove"}
                            </Button>
                            <Button variant="outline-dark" size = "sm" onClick={() => setModalShow(true)}>
                                More Info
                            </Button>

                            <BookDetail
                                image={props.image}
                                title={props.title}
                                authors={props.authors}
                                publisher={props.publisher}
                                // isbn={bookISBN}
                                length={props.length}
                                publishedDate={props.publishedDate}
                                categories={props.categories}
                                description={props.description}
                                rating={props.rating}
                                previewLink={props.previewLink}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </>
                    </Card.Body>
                </Card>
            </div> 
    );
}

export default BookCard;