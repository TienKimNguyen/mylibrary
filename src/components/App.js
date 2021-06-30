import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import MyBooks from "./MyBooks";

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

/**
 * 
 * @returns Router embedded in a NavBar that helps direct the user to the target page
 */
const App = () => {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mybooks' component={MyBooks} />
      </Switch>
    </Router>
  );
};

export default App;
