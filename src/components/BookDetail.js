import * as React from 'react';
import { Modal, Button, Row, Col, Container, Table} from 'react-bootstrap';

const BookDetail = (props)  => {

  const link = props.previewLink;
      let isbn = "";
    let authors = "";

    if (props.isbn === undefined) {
        isbn = "N/A";
    } else {
        if (props.isbn[0] !== undefined && props.isbn[0].type === "ISBN_13"){
            isbn = props.isbn[0].identifier;
        } else if (props.isbn[1] !== undefined && props.isbn[1].type === "ISBN_13"){
            isbn = props.isbn[1].identifier;
        } else {
            isbn = "N/A";
        }
    }

    if (props.authors === undefined) {
        authors = "N/A";
    } else {
        for (let i = 0; i < props.authors.length; i++) {
            if (i !== 0){
                authors = authors + " | ";
            }
            authors = authors + props.authors[i];
        }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Book Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={5}>
                <div className="card-image">
                    <img src={props.image} alt="" className="book-image-popup" />
                </div>
            </Col>
            <Col xs={12} md={7}>
                <Table borderless>
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>{props.title}</td>
                      </tr>
                      <tr>
                        <td>Authors</td>
                        <td>{authors}</td>
                      </tr>
                      <tr>
                        <td>Published Year</td>
                        <td>{props.publishedDate.substring(0,4)}</td>
                      </tr>
                      <tr>
                        <td>Publisher</td>
                        <td>{props.publisher !== undefined ? props.publisher : "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Average Rating</td>
                        <td>{props.rating !== undefined ? props.rating + " / 5" : "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Length</td>
                        <td>{props.length !== undefined ? props.length + " pages" : "N/A"}</td>
                      </tr>
                      <tr>
                        <td>Categories</td>
                        <td>{props.categories !== undefined ? props.categories : "N/A"}</td>
                      </tr>
                      <tr>
                        <td>ISBN</td>
                        <td>{isbn}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{props.description === undefined ? "N/A" : props.description}</td>
                      </tr>
                    </tbody>
                </Table>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
        <Modal.Footer>
          <a href={link} target="/blank">
            <Button variant="outline-dark" className="card-btn preview-btn btn">Preview</Button>
          </a>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default BookDetail;