import React from "react";
import SearchArea from "./SearchArea";

const Header = (props) => {
  return (
    <div className="main-header">
        <div className="header" onClick={() => window.location.reload(false)}>
          {/* <i className="fas fa-book-reader fa-3x"></i> */}
          <h1>Find your books of life here</h1>
        </div>
      
      <div className="search-bar">
        <SearchArea 
          searchBook={props.searchBook} 
          handleSearch={props.handleSearch} 
          handleSort={props.handleSort} 
          handleSubmit={props.handleSubmit} 
          resetInput={props.resetInput} 
        />
      </div>
      <div className="books_error">
        {props.error && <h2>{props.error}</h2>}
      </div> 
    </div>
  );    
}

export default Header;
