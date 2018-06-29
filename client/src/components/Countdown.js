import React, { Component } from "react";


class Countdown extends Component {
    constructor(props){
        super(props);
        this.state = {currentCount: 15}
      }
      timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount < 1) { 
          clearInterval(this.intervalId);
        }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }
      render() {
        return(
          <div>{this.state.currentCount}</div>
        );
      }
    }



export default Countdown