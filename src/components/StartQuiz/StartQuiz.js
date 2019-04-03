import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

class QuizStart extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        {this.props.quizname
          ? <h1>Quiz: { this.props.quizname }</h1> 
          : <h1>Loading quiz...</h1>
        }
        <div className="StartQuiz" >
          {this.props.status !== 'READY' 
            ? <Button variant="primary disabled" size="lg" className="StartQuizButton" onClick={() => this.props.startQuiz(true)} disabled>
                <span>Start Quiz!</span>
              </Button>
            : <Button variant="primary" size="lg" className="StartQuizButton" onClick={() => this.props.startQuiz(true)}>
                <span>Start Quiz!</span>
              </Button>
          }
        </div>
      </div>
    );
  }
}

export default QuizStart;
