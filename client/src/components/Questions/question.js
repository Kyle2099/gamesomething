import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        questions: [],
        correctAnswers: [],
        wrongAnswers: [],
<<<<<<< HEAD
        all: [],
        counter: 0
=======
        allAnswers: [],
        playerScore: 0, 
        playerWrong: 0
>>>>>>> ba5321b7f6ac61cfc673b3b021d834c8cbd769c3
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

<<<<<<< HEAD
    nextQuestion = () => {
        this.setState({ counter: this.state.counter + 1 });
        console.log(this.state.counter)
        return (
            <div>
                {this.state.questions[this.state.counter].question}
                <Button type="submit">{this.state.correctAnswers ? <p>{this.state.correctAnswers}</p> : ""}</Button><br />
                <br />
                <Button type="submit"><p>{this.state.questions[this.state.count].correct_answer}</p></Button><br />
                <br />
                <Button type="submit"><p>{this.state.questions[this.state.count].wrong_answer}</p></Button><br />
                <br />
                <Button type="submit"><p>{this.state.wrongAnswers[2]}</p></Button><br />
                <br />
            </div>
        )

        // this.state.questions.map(question => {
        //     var uestio = question.question
        //     var wrong = question.wrong
        //     var right = question.right
        //     return (

        //     );
        // })
        // const counter = this.state.questions + 1;
        // this.setState({

        // })
        // console.log(this.state.questions)
    }

=======
    handleTimeout = () => {
        this.setState({
            playerWrong: this.state.playerWrong +1,
            //counter +1 (next question)
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
>>>>>>> ba5321b7f6ac61cfc673b3b021d834c8cbd769c3

    render() {
        return (
            <div className="container center">
                <div className="row">
                {console.log("score is", this.state.playerScore)}
                {console.log("wrong guesses:", this.state.playerWrong)}
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
<<<<<<< HEAD
                                <h2><Countdown /></h2>
                                {/* {this.state.questions ? <h3>{this.state.questions}</h3> : ""} */}
                                {/* {console.log("questions in render", this.state.questions)} */}
                                {/* <Button type="submit">{this.state.correctAnswers ? <p>{this.state.correctAnswers}</p> : ""}</Button><br />
                                <br />
                                <Button type="submit"><p>{this.state.wrongAnswers[0]}</p></Button><br />
                                <br />
                                <Button type="submit"><p>{this.state.wrongAnswers[1]}</p></Button><br />
=======
                                <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
                                {this.state.question ? <h3>{this.state.question}</h3> : ""}
                                <Button id="correct" onClick={this.clickCheck}>{this.state.correctAnswer ? this.state.correctAnswer: ""}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[0]}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[1]}</Button><br />
                                <br />
                                <Button id="wrong" onClick={this.clickCheck}>{this.state.wrongAnswers[2]}</Button><br />
>>>>>>> ba5321b7f6ac61cfc673b3b021d834c8cbd769c3
                                <br />
                                <Button type="submit"><p>{this.state.wrongAnswers[2]}</p></Button><br />
                                <br /> */}
                                {this.nextQuestion()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Question