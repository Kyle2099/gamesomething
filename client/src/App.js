import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './src/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Game />
      </div>
    );
  }
}

export default App;
