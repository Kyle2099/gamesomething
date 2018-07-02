import React, {Component} from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import {firebase} from "./firebase";
import Question from './components/Questions'
// import QuestionsDisplay from './components/QuestionDisplay'


class App extends Component {
  state = {
    question: [],
    correctAnswer: '',
    wrongAnswers: [],
    allAnswers: [],

};


  componentDidMount(){
    firebase.auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(`firebaseUser=${firebaseUser}`);
          var trueUser = firebaseUser.email;  
          console.log("trueUs er=" , trueUser);
          this.setState({trueUser});

      } else {
          console.log('not logged in');
          this.setState({trueUser:null})
      }
    });
  };

  render() {
    return (
      <div>
        <NavBar username={this.state.trueUser}></NavBar>
        <Jumbotron>
        </Jumbotron>
          <Question/>
        <Footer username={this.state.trueUser} pScore={this.state.playerScore}></Footer>
      </div>
    );
  }
}
export default App;
