import React from "react";
import MyBooks from "./MyBooks";
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavBar";

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
