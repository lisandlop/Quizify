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
        <h2>You got {this.props.finalPoints} out of {this.props.questions.length} points!</h2>

        {/* : <Button key="finish" id="checkResults" onClick={() => alert('You got ' + this.points + ' out of ' + this.props.questions.length + ' points!')} variant="light" size="lg" block>Check results</Button> */}

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
