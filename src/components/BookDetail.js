import * as React from 'react';
import { Modal, Button, Row, Col, Container, Table} from 'react-bootstrap';


function BookDetail(props) {

  const link = props.previewLink;

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
                        <td>{props.authors}</td>
                      </tr>
                      <tr>
                        <td>Published Year</td>
                        <td>{props.publishedDate.substring(0,4)}</td>
                      </tr>
                      <tr>
                        <td>Publisher</td>
                        <td>{props.publisher}</td>
                      </tr>
                      <tr>
                        <td>Average Rating</td>
                        <td>{props.rating} / 5</td>
                      </tr>
                      <tr>
                        <td>Length</td>
                        <td>{props.length} pages</td>
                      </tr>
                      <tr>
                        <td>Categories</td>
                        <td>{props.categories}</td>
                      </tr>
                      <tr>
                        <td>ISBN</td>
                        <td>{props.isbn}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td className="description-text">{props.description}</td>
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