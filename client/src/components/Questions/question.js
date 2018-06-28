import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown'

class Question extends Component {
    state = {
        question: '',
        correctAnswer: '',
        wrongAnswers: []
    };


    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                console.log(res.data.results[0].question)
                console.log(res.data.results[0].correct_answer)
                console.log(res.data.results[0].incorrect_answers[0])
                console.log(res.data.results[0].incorrect_answers[1])
                console.log(res.data.results[0].incorrect_answers[2])
                this.setState({ question: res.data.results[0].question })
                this.setState({ correctAnswer: res.data.results[0].correct_answer })
                this.setState({ wrongAnswers: [...res.data.results[0].incorrect_answers] })
            })
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <Countdown />
                                <h2>Question</h2>
                                {this.state.question ? <h4>{this.state.question}</h4> : ""}
                                {this.state.correctAnswer ? <h4>{this.state.correctAnswer}</h4> : ""}
                                {this.state.wrongAnswers ? <h4>{this.state.wrongAnswers}</h4> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Question