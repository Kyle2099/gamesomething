// import React from 'react'
// import Countdown from "../Countdown"
// import Button from 'react-materialize'
// import Question from '../Questions';

// class QuestionsDisplay extends Component {
//     <div className="col s12 m6">
//         <div className="card blue-grey darken-1">
//             <div className="card-content white-text">
//                 <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
//                 <div>
//                     {this.state.counter !== 9 ? this.state.questions[this.state.counter].question : () => this.endGame()}<br /><br />
//                     <div><Button type="submit" id="correct" disabled={this.state.isDisabled} onClick={this.clickCheck}>{this.state.questions ? this.state.questions[this.state.counter].correctAnswers : ''}</Button></div>
//                     <br />
//                     {this.state.questions ? this.state.questions[this.state.counter].wrongAnswers.map(answer => (
//                         <div><Button type="submit" id="wrong" disabled={this.state.isDisabled} onClick={this.clickCheck}>{answer}</Button><br /><br /></div>
//                     )) : ""}
//                     <br />
//                 </div>
//             </div>
//         </div>
//     </div>
//                 }

// export default QuestionsDisplay