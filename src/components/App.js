import React, {Component} from "react";
import Header from "./Header";
import PaginationPage from "./PaginationComponent";
import BookList from "./BookList";
import '../styles/App.css';

class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: '',
      error: undefined,
      totalItems: 0,
      currentPage: 1
    }
  };

  searchBook = async (e) => {
    e.preventDefault();
    const searchTerm = this.state.searchField;
    if (searchTerm){
      const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=40`);
      const data = await api_call.json();
      console.log(data);
      const cleanData = this.cleanData(data)
      this.setState({
        books: cleanData, 
        error: "",
        totalItems: data.totalItems
      })
    } else {
      this.setState({
        error: "Please enter a keyword to search!", 
        books: [], 
        searchField: '',
        totalItems: 0,
        currentPage: 1,
        sort: ''
      })
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

  handleNextPage = async(pageNumber) => {
    
    const startIndex = (pageNumber - 1) * 40;
    const search = this.state.searchField;
    console.log(startIndex + this.state.searchField);
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=40`);
    const data = await api_call.json();
    console.log(data);
    const cleanData = this.cleanData(data)
    this.setState({
      books: cleanData,
      error:"",
      currentPage: pageNumber
    })
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
    const numberPages = Math.floor(this.state.totalItems / 40);
    return(
      <div className="App">
        <div className = "Books">
          <Header searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} error={error}/> 
          {this.state.totalItems > 40 ? <PaginationPage pages={numberPages} prevPage={this.handlePrevPage} currentPage = {this.state.currentPage} nextPage={this.handleNextPage}/> : ''}
          {this.state.searchTerm !== '' ? <BookList books = {sortedBooks} /> : ''}
        </div>
      </div>

    );
  }
};

export default App;
