import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        questions: null,
        counter: 0,
        allAnswers: [],
        playerScore: 0,
        playerWrong: 0
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                console.log(res.data.results)
                // setState({ questions: res.data.results })
                const questions = [];

                for (let i = 0; i < 10; i++) {
                    questions.push({
                        question: res.data.results[i].question,
                        correctAnswers: res.data.results[i].correct_answer,
                        wrongAnswers: res.data.results[i].incorrect_answers
                    });
                }
                this.setState({ questions });
            })
    }

    handleTimeout = () => {
        this.setState({
            playerWrong: this.state.playerWrong + 1,
            counter: this.state.counter + 1//counter +1 (next question)
        })
    }

    clickCheck = event => {
        let answer = event.target.id
        // console.log(event.target.id);
        if (answer === "correct") {
            // const score = this.state.playerScore + 1;
            // console.log("pre score is", this.state.playerScore);
            this.setState({ playerScore: this.state.playerScore + 1 });
            console.log("correct clicked")
        } else {
            this.setState({ playerWrong: this.state.playerWrong + 1 });
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
                                <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
                                <div>
                                    {this.state.questions ? this.state.questions[this.state.counter].question : ''}<br /><br />
                                    <div><Button type="submit" id="correct" onClick={this.clickCheck}>{this.state.questions ? this.state.questions[this.state.counter].correctAnswers : ''}</Button></div>
                                    <br />
                                    {this.state.questions ? this.state.questions[this.state.counter].wrongAnswers.map(answer => (
                                        <div><Button type="submit" id="wrong" onClick={this.clickCheck}>{answer}</Button><br /><br /></div>
                                    )) : ""}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Question