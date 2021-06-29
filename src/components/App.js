import React, {useEffect, useState} from "react";
import Header from "./Header";
// import BookSlide from "./BookSlide";
// import MyBooks from "./MyBooks";
import PaginationPage from "./PaginationComponent";
import BookList from "./BookList";
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  // CREATE AND INITIALIZE VARIABLES
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [sort, setSort] = useState('');
  const [error, setError] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBookList, setShowBookList] = useState(false);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const numberPages = Math.floor(totalItems / 40);
  const [sortedBooks, setSortedBooks] = useState([]);
  
  // CALL API
  // const callApi = async (startIndex) => {
  //   const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
  //   const data = await api_call.json();
  //   return data;
  // }

  // CLEAN DATA FETCHED
  const cleanData = (data) => {
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

  // HANDLE SEARCH
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  // MAIN SEARCH FUNCTION
  const searchBook = async (e) => {
    e.preventDefault();
  
    setSort('');
    setCurrentPage(1);
   
    if (searchField) // When there's a keyword entered
    {
      const startIndex = 0;
      const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
      const data = await api_call.json();
      // const data = callApi(0);
      console.log(data);
      const cleanedData = cleanData(data);

      setBooks(cleanedData);
      setError('');
      setTotalItems(data.totalItems);
      setShowBookList(true);
      sortBooks(e);
    } 
    else // when there's no keyword entered
    {
      setBooks([]);
      setSearchField('');
      setError("Please enter a keyword to search!");
      setTotalItems(0);
      setShowBookList(false);
    }
  }

  // HANDLE SORT
  const handleSort = (e) => {
    setSort(e.target.value);
  }

  // MAIN SORT FUNCTION
  const sortBooks = (e) => {
    e.preventDefault();

    setSortedBooks(
      books.sort((a, b) => {
        if (sort === 'Newest') {
          // substring 0 - 4 is grasping the year
          return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
        } else if  (sort === 'Oldest') {
         return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
        } else {
         return 0;
        }
      })
    );

   
    console.log (sortedBooks);
    
  }

  // HANDLE CLICKING ANOTHER NUMBERED PAGE
  const handleNextPage = async (pageNumber) => {
    const startIndex = (pageNumber - 1) * 40;
    // const data = callApi(startIndex);
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
    const data = await api_call.json();
    console.log(data);
    const cleanedData = cleanData(data);

    setBooks(cleanedData);
    setError('');
    setCurrentPage(pageNumber);
  }

  // RETRIEVING THE LIST OF FAVORITE BOOKS FROM LOCAL STORAGE ON CHANGE
	useEffect(() => {
		const bookFavorites = JSON.parse(
			localStorage.getItem('book-favorites')
		);

		if (bookFavorites) {
			setFavoriteBooks(bookFavorites);
		}
	}, []);

  // SAVE FAVORITE LIST TO LOCAL STORAGE
  const saveToLocalStorage = (items) => {
		localStorage.setItem('book-favorites', JSON.stringify(items));
	};

  // ADD A BOOK TO THE LIST OF FAVORITE BOOKS IN LOCAL STORAGE
	const addFavoriteBook = (book) => {
		const newFavoriteList = [...favoriteBooks, book];
    setFavoriteBooks(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  // REMOVE A BOOK FROM THE LIST OF FAVORITE BOOKS IN LOCAL STORAGE
	const removeFavoriteBook = (book) => {
		const newFavoriteList = favoriteBooks.filter(
			(favorite) => favorite.id !== book.id
		);

    setFavoriteBooks(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  return(
    <div className="App">
      <div className = "Books">
        <Header searchBook={searchBook} handleSearch={handleSearch} handleSort={handleSort} error={error}/> 
        {/* <MyBooks /> */}
        {/* {searchFieldshowBookList === false ? <BookSlide /> : '' } */}

        {totalItems > 40 ? <PaginationPage pages={18} currentPage = {currentPage} nextPage={handleNextPage}/> : ''}
        
        {searchField !== '' ? <BookList books = {books} handleFavClick={addFavoriteBook} change={'add'} /> : ''}
        <h1>Favorite Books</h1>
        {favoriteBooks !== null ? <BookList books = {favoriteBooks} handleFavClick={removeFavoriteBook} change={'remove'}/> : '' }
      </div>
    </div>
  );
};

export default App;
