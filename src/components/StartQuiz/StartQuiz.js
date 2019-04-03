import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

import { withFirebase } from '../Firebase';

class QuizStart extends Component {
  constructor(props) {
      super(props);

      this.state = {
          quizname: ''
      };
  }

  componentDidMount() {
    this.props.firebase.getQuizByID(this.props.quizid)
      .then(result => {
        this.setState({quizname: result})
      })
  }

  render() {
    return (
      <div>
        <h1>Quiz: { this.state.quizname }</h1>
        <div className="StartQuiz" >
          <Button variant="primary" size="lg" className="StartQuizButton" onClick={() => this.props.startQuiz(true)}>
            <span>Start Quiz!</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default withFirebase(QuizStart);
