import React, {useState, useEffect} from "react";
import BookList from "./BookList";

const MyBooks = (props) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  console.log(props.books === undefined ? "yes" :"no");

  const saveToLocalStorage = (items) => {
		localStorage.setItem('book-favorites', JSON.stringify(items));
	};

  const removeFavoriteBook = (book) => {
		const newFavoriteList = favoriteBooks.filter(
			(favorite) => favorite.id !== book.id
		);

    setFavoriteBooks(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  useEffect(() => {
		const bookFavorites = JSON.parse(
			localStorage.getItem('book-favorites')
		);

		if (bookFavorites) {
			setFavoriteBooks(bookFavorites);
		}
	}, []);

  return (
      <div>
        
        <div className="list" style={{display: "inline-flex", justifyContent: "center", width: "100%", marginTop: "30px"}}>
          <i className="fas fa-book-reader fa-3x"></i>
          <h1 style={{marginLeft: "20px" }}>MY BOOKS</h1>
        </div>
        <BookList books = {favoriteBooks} handleFavClick={removeFavoriteBook} change={props.change}/> 
      </div>
      
    );
}

export default MyBooks;