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
        <h2>You got ? out of ? points!</h2>
        <h5>Here are the songs used for this quiz: </h5>
        <p>Artist – song name</p>
        <p>Artist – song name</p>
        <p>Artist – song name</p>
        <br/>
        <Button variant="primary" size="lg" className = "QuizAgainButton">
          <span>Take quiz again?</span>
        </Button>
      </div>

      // antal rätt svar
      // lista med låtarna 

    );
  }
}

export default EndGame;
