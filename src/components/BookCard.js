import * as React from "react";
import { Button, Card } from "react-bootstrap";

import BookDetail from "./Popup";

const BookCard = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
             <div className="bookCard-col col-lg-3 col-md-4 col-sm-6">
                <Card border="light" style={{ width: '18rem' }} className="card-container">
                    <Card.Img variant="top" src={props.image} className="book-image"/>
                    <Card.Body>
                        {/* <Card.Title><h3>{props.title}</h3></Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text> */}
                        <>
                            <Button variant="outline-dark" size = "sm" onClick={() => setModalShow(true)}>
                                More Info
                            </Button>

                            <BookDetail
                                image={props.image}
                                title={props.title}
                                authors={props.authors}
                                publisher={props.publisher}
                                isbn={props.isbn}
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