import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Game from './src/index.js';
import HighScore from "./components/HighScore"


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <HighScore />
        <Jumbotron />
      <Game />
      </div>
    )
  }
}
    

export default App;
