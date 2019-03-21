import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/SelectPage.scss';

import Quizzes from '../components/Quizzes/Quizzes'

class SelectPage extends Component {
  render() {
    return (
      <div className="SelectPage">
        <Container fluid={true}>
          <Row>
            <Col xs={6}>
              <Quizzes/>
            </Col>

            <Col xs={6}>
              <h1>Select Quiz</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SelectPage;