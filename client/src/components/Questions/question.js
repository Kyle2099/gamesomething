import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        questions: null,
        counter: 0,
        playerScore: 0,
        playerWrong: 0,
        answerCorrect: null,
        isDisabled: false
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
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

<<<<<<< HEAD
    // shuffle = () => {
    //     let currentIndex = this.state.questions.length, temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {

    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;

    handleTimeout = () => {
        if (this.state.answerCorrect) {
            this.setState({
                playerScore: this.state.playerScore + 1,
                counter: this.state.counter + 1,
                isDisabled: false,
                answerCorrect: null
            })
        } else {
            this.setState({
                playerWrong: this.state.playerWrong + 1,
                counter: this.state.counter + 1,
                isDisabled: false,
                answerCorrect: null
            })
        }
=======
    endGame = () => {
        console.log(this.state.questions);
        return "Hey";
>>>>>>> 24958c5dc891a75e7f77b798354457afbd547df6
    }

    clickCheck = event => {
        let answer = event.target.id

        if (answer === "correct") {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: true });
        } else {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: false });
        }
    }

<<<<<<< HEAD
=======

>>>>>>> 24958c5dc891a75e7f77b798354457afbd547df6
    render() {
        // this.shuffle()
        return (
            <div className="container center">
                <div className="row">
                    {console.log("score is", this.state.playerScore)}
                    {console.log("wrong guesses:", this.state.playerWrong)}
                    {}
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
                                <div>
                                    {this.state.counter ? this.state.questions[this.state.counter].question : ''}<br /><br />
                                    <div><Button type="submit" id="correct" disabled={this.state.isDisabled} onClick={this.clickCheck}>{this.state.questions ? this.state.questions[this.state.counter].correctAnswers : ''}</Button></div>
                                    <br />
                                    {this.state.questions ? this.state.questions[this.state.counter].wrongAnswers.map(answer => (
                                        <div><Button type="submit" id="wrong" disabled={this.state.isDisabled} onClick={this.clickCheck}>{answer}</Button><br /><br /></div>
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