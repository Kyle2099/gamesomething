import React, {Component} from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import {firebase} from "./firebase"

class App extends Component {
  state = { trueUser: null };

  componentDidMount(){
    firebase.auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(`firebaseUser=${firebaseUser}`);
          var trueUser = firebaseUser.email;
          console.log("tU=" , trueUser);
          this.setState({trueUser});

      } else {
          console.log('not logged in');
          this.setState({trueUser:null})
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar username={this.state.trueUser}></NavBar>
        <Jumbotron></Jumbotron>
        <Game></Game>
        <Footer username={this.state.trueUser}></Footer>
      </div>
    );
  }
}
export default App;
