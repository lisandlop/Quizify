import React, { Component } from 'react';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './EndGame.scss'

class EndGame extends Component {
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
      <div className = "EndGame" >
        <Button variant="primary" size="lg" className = "QuizAgainButton">
          <span>Take quiz again?</span>
        </Button>
      </div>

    );
  }
}

export default QuizStart;
