import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

class QuizStart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "StartQuiz" >
        <Button variant="primary" size="lg" className="StartQuizButton" onClick={() => this.props.startQuiz(true)}>
          <span>Start Quiz!</span>
        </Button>
      </div>
    );
  }
}

export default QuizStart;
