import React, {Component} from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
class Books extends Component{
  constructor (props){
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: '',
      error: undefined
    }
  };

  searchBook = async (e) => {
    e.preventDefault();
    const searchTerm = this.state.searchField;
    if (searchTerm){
      const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=all&maxResults=40`);
      const data = await api_call.json();
      console.log(data);
      const cleanData = this.cleanData(data)
      this.setState({books: cleanData, error: ""})
    } else {
      this.setState({error: "Please enter a keyword to search!"})
    }

  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  handleSort = (e) => {
    this.setState({sort: e.target.value})
  }

  cleanData = (data) => {
    const cleanedData = data.items.map((book) => {
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
     } else if  (this.state.sort === 'Oldest') {
      // substring 0 - 4 is grasping the year
      return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
    } else {
      return 0;
    }
   })

   const error = this.state.error;

    return(
      <div className = "Books">
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
        <BookList books = {sortedBooks} error={error} />
      </div>
    );
  }
};

export default Books;
