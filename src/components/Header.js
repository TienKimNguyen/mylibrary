import React from "react";
import SearchArea from "./SearchArea";
import App from "./App";

// import {
//   BrowserRouter,
//   Switch,
//   Route, Link
// } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="main-header">
        <div className="header" onClick={() => window.location.reload(false)}>
          {/* <i className="fas fa-book-reader fa-3x"></i> */}
          <h1>BOOKLAND</h1>
             
          {/* <BrowserRouter>
            <Link to="/"><h1>BOOKLAND</h1></Link>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </BrowserRouter> */}
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
