import React, {Component} from "react";
// import Header from "./Header";
import Books from "./Books";


import '../styles/App.css';

class App extends Component {
  render(){
    return (
        <div className="App">
          <Books />
        </div>

    );
  }
};

export default App;