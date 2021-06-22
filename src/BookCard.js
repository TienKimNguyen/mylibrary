import React from "react";

const BookCard = (props) => {
    return (
        
        <div class="card-container">
             <img src={props.image} alt=""/>
             <div class="desc">
                 <h2>{props.title}</h2>
                 <h3>{props.author}</h3>
                 <p>{props.published}</p>
             </div>
        </div>
    );
}

export default BookCard;