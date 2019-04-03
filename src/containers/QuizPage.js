import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/QuizPage.scss';

import StartQuiz from '../components/StartQuiz/StartQuiz';
import Question from '../components/Question/Question';

class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      quiz: this.props.match.params.id
    }
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
              {!this.state.started ?  (<StartQuiz startQuiz={this.startQuiz} quizid={this.state.quiz}/>) : 
                                      (<Question quizid={this.state.quiz}/>)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuizPage;