import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} id="input-form">
        
        <input onChange={props.handleSearch} placeholder={'Enter a keyword to search...'} type = "text"/>
        
        <button type="submit" className="btn search-btn btn-lg btn-light"><i className="fas fa-search"></i></button>
        
        <select defaultValue="Sort" onChange={props.handleSort} className="sort-btn browser-default custom-select">
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      
      </form>
    </div>
  );
}
export default SearchArea;
