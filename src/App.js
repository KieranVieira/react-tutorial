import React, { Component } from 'react';
import HomePage from './Components/HomePage.js';
import Services from './Components/Services';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <Services />
      </div>
    );
  }
}

export default App;
