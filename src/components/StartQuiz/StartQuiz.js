import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

import * as ROUTES from '../../constants/routes';

class QuizStart extends Component {
  render() {
    return (
      <div className="QuizStart">
        {this.props.quizname
          ? <h1 id="quizName" >Quiz: { this.props.quizname }</h1> 
          : <h1 id="loadingName" >Loading quiz...</h1>
        }
        <div className="StartQuiz" >
          {this.props.status !== 'READY' 
            ? <Button variant="info disabled" size="lg" className="StartQuizButton" disabled>
                <span>Start Quiz!</span>
              </Button>
            : <Button variant="info" size="lg" className="StartQuizButton" onClick={() => this.props.startQuiz(true)}>
                <span>Start Quiz!</span>
              </Button>
          }
        </div>
        <Button variant="dark" href={ROUTES.SELECT}>Back</Button>
      </div>
    );
  }
}

export default QuizStart;
