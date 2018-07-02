import React, { Component } from 'react';
import './App.css';


class ResultsPage extends Component {
  state = {
    username: [],
    correctguesses: [],
    wrongguesses: []
  };



render() { 
  return (
      <div className="App container">
        <ResultsPage>
          <thread>
            <tr>
              <th>username{props.state.username} | Correct Guesses: {props.state.playerScore} Score:{props.state.playerScore}</th>
            </tr>
          </thread>
        </ResultsPage>
    </div>
  );
}
}

export default ResultsPage;
