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
        all: [],
        counter: 0
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


    render() {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown /></h2>
                                {/* {this.state.questions ? <h3>{this.state.questions}</h3> : ""} */}
                                {/* {console.log("questions in render", this.state.questions)} */}
                                {/* <Button type="submit">{this.state.correctAnswers ? <p>{this.state.correctAnswers}</p> : ""}</Button><br />
                                <br />
                                <Button type="submit"><p>{this.state.wrongAnswers[0]}</p></Button><br />
                                <br />
                                <Button type="submit"><p>{this.state.wrongAnswers[1]}</p></Button><br />
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