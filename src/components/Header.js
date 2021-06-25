import React from "react";
import SearchArea from "./SearchArea";

const Header = (props) => {
  return (
    <div className="main-header">
      <div className="header" >
        <i className="fas fa-book-reader fa-3x"></i>
        <h1>My Books</h1>    
      </div>
      <div className="search-bar">
        <SearchArea searchBook={props.searchBook} handleSearch={props.handleSearch} handleSort={props.handleSort} handleSubmit={props.handleSubmit} />
      </div>
    </div>
  );    
}

export default Header;
