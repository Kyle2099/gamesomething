import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        questions: [],
        correctAnswers: [],
        wrongAnswers: [],
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
                for (let i = 0; i < 10; i++) {
                    this.setState({ questions: res.data.results[i].question })
                    this.setState({ correctAnswers: res.data.results[i].correct_answer })
                    this.setState({ wrongAnswers: [...res.data.results[i].incorrect_answers] })
                    // console.log("array", this.state.wrongAnswers)
                    // console.log(this.state.correctAnswers)
                    // console.log(this.state.wrongAnswers)
                }
            })
    }

    handleTimeout = () => {
        this.setState({
            playerWrong: this.state.playerWrong +1,
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
                                <div>
                                    {this.state.questions[this.state.counter].question}
                                    {/* <Button type="submit">{this.state.correctAnswers ? {this.state.correctAnswers} : ""}</Button><br />
                                    <br />
                                    <Button type="submit">{this.state.questions[this.state.count].correct_answer}
                                    </Button><br />
                                    <br />
                                    <Button type="submit">{this.state.questions[this.state.count].wrong_answer}
                                    </Button><br />
                                    <br />
                                    <Button type="submit">{this.state.wrongAnswers[2]}
                                    </Button><br /> */}
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