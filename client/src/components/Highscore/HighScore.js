import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import 'font-awesome/css/font-awesome.css'
// import Table from 'react-bootstrap/lib/Table'
// import Image from 'react-bootstrap/lib/Image'
import fire from "firebase/auth";

// import database from "../firebase";



class App extends Component {

  state = {
    hs100Days: [],
    hs100All: [],
    current: true

  }

  // 
  getjpData(url, stateName) {
    console.log('I hit');
    axios.get(url)
      .then(({ data }) => {
        this.setState({ [stateName]: data });
        console.log(this.state.hs100Days);
      })
  }

  scoreUpdate(value) {
    if (this.state.current !== value) {
      this.setState({ current: value });
    }
  }

  componentDidMount() {


    fire.database().ref().on("value", function (snapshot) {
      console.log(snapshot.val())
    })
  
  };


  render() {
    return (
      <div className="App container">
        <Table striped boardered condensed hover ClassName='colorLightblue'>
          <thread>
            <tr>
              <th>username={this.state.trueUser}</th>
              <th> Results</th>
            </tr>
          </thread>

        </Table>
      </div>
    );
  };
}

export default App;
