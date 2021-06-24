import * as React from "react";
import { Provider, Modal, Button, Portal } from "react";

const BookCard = (props) => {

    const link = props.previewLink;



    return (
            <div className="bookCard-col col-lg-3 col-sm-4">
                <div className="card-container">
                    <div className="card-image">
                        <img src={props.image} alt="" className="book-image" />
                    </div>
                    <div className="card-body">
                        {/* <h2>{props.title}</h2>
                        <h3>Author: {props.author}</h3> */}
                        <p>Published year: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
                        
                        <button type="button" className="card-btn get-btn btn btn-sm btn-outline-dark ">Get</button>
                       
                        <a href={link} target="/blank">
                             <button className="card-btn preview-btn btn btn-sm btn-outline-dark">Preview</button>
                        </a>
                     </div>
                 </div>
            </div>
    );
}

export default BookCard;