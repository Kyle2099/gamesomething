import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        question: [],
        correctAnswer: correctAnswer.sort(() => Math.random() - 0.5),
        wrongAnswers: [],
        allAnswers: [],
        playerScore: 0, 
        playerWrong: 0
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                this.setState({ question: res.data.results[0].question })
                this.setState({ correctAnswer: res.data.results[0].correct_answer })
                this.setState({ wrongAnswers: [...res.data.results[0].incorrect_answers] })
            })
    }

    clickCheck = event => {
        let answer = event.target.id
        // console.log(event.target.id);
        if (answer === "correct") {
            // const score = this.state.playerScore + 1;
            // console.log("pre score is", this.state.playerScore);
            this.setState({ playerScore: this.state.playerScore + 1 });
        } else {
            this.setState({ playerWrong: this.state.playerWrong + 1});
        }
    }

    render() {
        return (
            <div className="container center">
                <div className="row">
                {console.log("score is", this.state.playerScore)}
                {console.log("wrong guesses:", this.state.playerWrong)}
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown /></h2>
                                {this.state.question ? <h3>{this.state.question}</h3> : ""}
                                <Button id="correct" onClick={this.clickCheck}>{this.state.correctAnswer ? this.state.correctAnswer: ""}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[0]}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[1]}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[2]}</Button><br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Question