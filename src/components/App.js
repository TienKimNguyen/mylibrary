import React, {Component, useEffect} from "react";
import Header from "./Header";
// import BookSlide from "./BookSlide";
// import MyBooks from "./MyBooks";
import PaginationPage from "./PaginationComponent";
import BookList from "./BookList";
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: '',
      error: undefined,
      totalItems: 0,
      currentPage: 1,
      showBookList: false,
      favoriteBooks: []
    }
  };
  
  searchBook = async (e) => {
    e.preventDefault();
    const searchTerm = this.state.searchField;
    if (searchTerm){
      const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
      const data = await api_call.json();
      console.log(data);
      const cleanData = this.cleanData(data)
      this.setState({
        books: cleanData, 
        error: "",
        totalItems: data.totalItems,
        showBookList: true
      })
    } else {
      this.setState({
        error: "Please enter a keyword to search!", 
        books: [], 
        searchField: '',
        totalItems: 0,
        currentPage: 1,
        sort: '',
        showBookList: false
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
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
    const data = await api_call.json();
    console.log(data);
    const cleanData = this.cleanData(data)
    this.setState({
      books: cleanData,
      error:"",
      currentPage: pageNumber
    })
  }

  // useEffect(() =>
  //   bookFavs = JSON.parse(
	// 		localStorage.getItem('book-favs')
	// 	);

  //   console.log (bookFavs !== null ? "not null" : "null");

	// 	if (bookFavs) {
	// 		this.setState({favoriteBooks : bookFavs});
	// 	}
	// }, []);
 

  saveToLocalStorage = (items) => {
		localStorage.setItem('book-favs', JSON.stringify(items));
	};

	addFavoriteBook = (book) => {
		const newFavoriteList = [...this.state.favoriteBooks, book];
		this.setState({favoriteBooks: newFavoriteList});
		this.saveToLocalStorage(newFavoriteList);
	};

	removeFavoriteBook = (book) => {
		const newFavoriteList = this.state.favoriteBooks.filter(
			(favorite) => favorite.id !== book.id
		);

		this.setState({favoriteBooks : newFavoriteList});
		this.saveToLocalStorage(newFavoriteList);
	};

  render() {
   const sortedBooks = this.state.books.sort((a, b) => {
     if (this.state.sort === 'Newest') {
       // substring 0 - 4 is grasping the year
       return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
    } else if  (this.state.sort === 'Oldest') {
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
          {/* <MyBooks /> */}
          <h1>Books</h1>
          {/* {this.state.showBookList === false ? <BookSlide /> : '' } */}

          {this.state.totalItems > 40 ? <PaginationPage pages={numberPages} prevPage={this.handlePrevPage} currentPage = {this.state.currentPage} nextPage={this.handleNextPage}/> : ''}
          {this.state.searchTerm !== '' ? <BookList books = {sortedBooks} handleFavClick={this.addFavoriteBook} /> : ''}
          <h1>Favorite Books</h1>
          {this.state.favoriteBooks !== null ? <BookList books = {this.state.favoriteBooks} handleFavClick={this.removeFavoriteBook} /> : '' }
        </div>
      </div>

    );
  }
};

export default App;
