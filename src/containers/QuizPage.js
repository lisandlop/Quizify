import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/QuizPage.scss';

import Quizzes from '../components/Quizzes/Quizzes'

class QuizPage extends Component {
  render() {
    return (
      <div className="QuizPage">
        <Container fluid={true}>
          <Row>
            <Col xs={6}>
              <Quizzes/>
            </Col>

            <Col xs={6}>
              <h1>Play Quiz</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuizPage;