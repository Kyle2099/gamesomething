import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'


class Answers extends Component {
    state = {
        answer: answer.sort(()=> Math.random() - 0.5),
        counter: 0,
        playerScore: 0,
        playerWrong: 0,
        answerCorrect: null,
        isDisabled: false
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                const answer = [];
                for (let i = 0; i < 10; i++) {
                    answer.push({
                        question: res.data.results[i].question,
                        correctAnswers: res.data.results[i].correct_answer,
                        wrongAnswers: res.data.results[i].incorrect_answers
                    });
                }
                this.setState({ answer });
                console.log(answer)
                answer.sort(() => Math.random() - 0.5);
            })
    }

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
    }

    clickCheck = event => {
        let answer = event.target.id

        if (answer === "correct") {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: true });
        } else {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: false });
        }
    }

    render() {
        // this.shuffle()
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
                                    <div><Button type="submit" id="correct" disabled={this.state.isDisabled} onClick={this.clickCheck}>{this.state.answer ? this.state.answer[this.state.counter].correctAnswers : ''}</Button></div>
                                    <br />
                                    {this.state.answer ? this.state.answer[this.state.counter].wrongAnswers.map(answer => (
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