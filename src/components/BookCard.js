import React from "react";

const BookCard = (props) => {
    return (
            <div className="bookCard-col col-lg-2 col-sm-6">
                <div className="card-container">
                    <img src={props.image} alt="" className="book-image" />
                    <div className="desc">
                        {/* <h2>{props.title}</h2>
                        <h3>Author: {props.author}</h3> */}
                        <p>Published year: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
                        <button className="card-btn get-btn btn btn-sm btn-outline-dark ">Get</button>
                        <button className="card-btn preview-btn btn btn-sm btn-outline-dark">Preview</button>
                     </div>
                 </div>
            </div>

    );
}

export default BookCard;