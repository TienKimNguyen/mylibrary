import * as React from "react";
import { Button, Card } from "react-bootstrap";

import BookDetail from "./BookDetail";

const BookCard = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    // let isbn = "";
    // let authors = "";

    // if (props.isbn === undefined) {
    //     isbn = "N/A";
    // } else {
    //     if (props.isbn[0] !== undefined && props.isbn[0].type === "ISBN_13"){
    //         isbn = props.isbn[0].identifier;
    //     } else if (props.isbn[1] !== undefined && props.isbn[1].type === "ISBN_13"){
    //         isbn = props.isbn[1].identifier;
    //     } else {
    //         isbn = "N/A";
    //     }
    // }

    // if (props.authors === undefined) {
    //     authors = "N/A";
    // } else {
    //     for (let i = 0; i < props.authors.length; i++) {
    //         if (i !== 0){
    //             authors = authors + " | ";
    //         }
    //         authors = authors + props.authors[i];
    //     }
    // }

    return (
        <Card border="light" style={{ width: '18rem' }} className="card-container">
            <Card.Img variant="top" src={props.image} className="book-image" onClick={() => setModalShow(true)}/>
            <Card.Body>
                <>
                    <Button variant="outline-dark" size = "sm" className="btn addBtn" onClick={() => props.handleFavClick(props.book)}>
                        {props.change === 'add' ? "Add to your list" : "Remove"}
                    </Button>
                    {/* <Button variant="dark" size = "sm" className="btn infoBtn" onClick={() => setModalShow(true)}>
                        More Info
                    </Button> */}
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
    );
}

export default BookCard;