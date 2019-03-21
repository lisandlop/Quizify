import React, { Component } from 'react';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

class QuizStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizstart: 0
      //loading: false,
     // quizzes: [],
    };
  }

  render() {
    return (
      <div className = "StartQuiz" >
        <Button variant="primary" size="lg" className = "StartQuizButton">
          <span>Start Quiz!</span>
        </Button>
      </div>

    );
  }
}

export default QuizStart;
