import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Quiz from '../quiz';
import './reset.css';
import './index.css';

export default () => (
  <div>
    <header>
      <span>React Trivia Game</span>
      <div>
        <NavLink exact to="/" activeClassName="selected">Quiz</NavLink>
      </div>
    </header>

    <main>
      <Route exact path="/" component={Quiz} />
    </main>
  </div>
)