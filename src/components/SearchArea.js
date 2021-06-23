import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} placeholder={'Enter a keyword to search...'} type = "text"/>
        <button type="submit" className="btn search-btn btn-lg btn-dark">Search</button>
        <select defaultValue="Sort" onChange={props.handleSort} className="">
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
export default SearchArea;
