import React, {Component} from "react";
import SearchArea from "./SearchArea";

import request from 'superagent';
import BookList from "./BookList";
class Books extends Component{
  constructor (props){
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: ''
    }
  };

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({q: this.state.searchField})
      .then((data) => {
        const cleanData = this.cleanData(data)
        this.setState({books: cleanData})
      })
  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  handleSort = (e) => {
    this.setState({sort: e.target.value})
  }

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false){
        book.volumeInfo['publishedDate'] = '0000';
      } 
      else if (book.volumeInfo.hasOwnProperty('imageLinks') === false){
        book.volumeInfo['imageLinks'] = {thumbnail: 'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg'};
      }

      return book;
    })

    return cleanedData;
  }

  render() {
   const sortedBooks = this.state.books.sort((a, b) => {
     if (this.state.sort === 'Newest') {
       // substring 0 - 4 is grasping the year
       return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
     } else if  (this.state.sort === 'Newest') {
      // substring 0 - 4 is grasping the year
      return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
    }
   })

    return(
      <div className = "Books">
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
        <BookList books = {this.state.books} />
      </div>
    );
  }
};

export default Books;
