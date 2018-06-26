import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";

const App = () => (
  <div>
    <NavBar></NavBar>
    <Jumbotron></Jumbotron>
    <Game></Game>
    <Footer></Footer>
  </div>
);


export default App;

