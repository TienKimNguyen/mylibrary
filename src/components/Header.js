import React from "react";

const Header = () => {
  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">My Books</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //          <a class="nav-link" href="#">Features</a>
    //          </li>
    //         <li class="nav-item">
    //          <a class="nav-link" href="#">Pricing</a>
    //        </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //        </li>
    //      </ul>
    //     </div>
    //     <form class="d-flex">
    //       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //       <button class="btn btn-outline-success" type="submit">Search</button>
    //    </form>
    //  </div>
    // </nav>
    <header>
      <i className="fas fa-book-reader fa-3x"></i>
      <h1>My Books</h1>
    </header>
  );    
}

export default Header;
