import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/QuizPage.scss';

import StartQuiz from '../components/StartQuiz/StartQuiz';
import Question from '../components/Question/Question';

import { withFirebase } from '../components/Firebase';

class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      quizid: this.props.match.params.id,
      quizname: '',
      questions: []
    }
  }

  componentDidMount() {
    this.props.firebase.getQuizByID(this.state.quizid)
      .then(result => {
        this.setState({quizname: result.name})
      })

    this.props.firebase.getQuestionIDs(this.state.quizid)
      .then(result => {
        this.setState({questions: result, status: 'READY'})
      })
  }

  startQuiz = (start) => {
    this.setState({started: start});
  }

  render() {
    return (
      <div className="QuizPage backpage">
        <Container fluid={true}>
          <Row>
            <Col xs={12}>
              {!this.state.started 
                ? <StartQuiz startQuiz={this.startQuiz} quizname={this.state.quizname} status={this.state.status}/>
                : <Question quizid={this.state.quizid} questions={this.state.questions}/>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withFirebase(QuizPage);