import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from "react-bootstrap/DropdownButton";
// import { Dropdown } from "react-bootstrap";

const SearchArea = (props) => {
  // const [value, setValue] = useState('');
  // const handleSelect = (e) => {
  //   setValue(e);
  // }

  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} placeholder={'Enter a keyword to search...'} type = "text"/>
        <button type="submit" className="btn search-btn btn-lg btn-dark">Search</button>
        <select defaultValue="Sort" onChange={props.handleSort} className="sort-btn browser-default custom-select">
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>

        {/* <DropdownButton
          alignRight
          title="Sort"
          id="sort-dropdown"
          onSelect={handleSelect} 
          size="lg" 
        >
            <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
            <Dropdown.Item eventKey="Oldest">Oldest</Dropdown.Item>
        </DropdownButton> */}
      </form>
    </div>
  );
}
export default SearchArea;
