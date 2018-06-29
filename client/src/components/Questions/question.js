import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown'
import { Button } from 'react-materialize'
import './question.css'

class Question extends Component {
    state = {
        question: [],
        correctAnswer: '',
        wrongAnswers: [],
        allAnswers: [],
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                this.setState({ question: res.data.results[0].question })
                this.setState({ correctAnswer: res.data.results[0].correct_answer })
                this.setState({ wrongAnswers: [...res.data.results[0].incorrect_answers] })
            })
    }


    render() {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown /></h2>
                                {this.state.question ? <h3>{this.state.question}</h3> : ""}
                                <Button>{this.state.correctAnswer ? <p>{this.state.correctAnswer}</p> : ""}</Button><br />
                                <br />
                                <Button><p>{this.state.wrongAnswers[0]}</p></Button><br />
                                <br />
                                <Button><p>{this.state.wrongAnswers[1]}</p></Button><br />
                                <br />
                                <Button><p>{this.state.wrongAnswers[2]}</p></Button><br />
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