import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './StartQuiz.scss'

import { withFirebase } from '../Firebase';

class QuizStart extends Component {
  constructor(props) {
      super(props);

      this.state = {
          quizzes: []
      };

  }

  componentDidMount(){
    this.getQuizzesFromFirebase()
  }

  getQuizzesFromFirebase(){
    this.props.firebase.getAllQuizzes()
      .then(snapshot => {
          let quizzes = []
          snapshot.forEach((doc) => {
              const quiz = doc.data()  
              quizzes.push(quiz)  
          })
          this.setState({
              quizzes: quizzes
          })
      })   
  }

  render() {

    const quizzes = this.state.quizzes
    const quiz = quizzes.length > 0 ? quizzes[0] : {}

    return (
      <div>
        <h1>Quiz: { quiz.name }</h1>
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
