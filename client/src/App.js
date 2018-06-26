import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./components/Footer";
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body"

const App = () => (
  <div>
    <NavBar></NavBar>
    <Jumbotron></Jumbotron>
    <Body></Body>
    {/* <Footer></Footer> */}
  </div>
);




export default App;
