import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
import '../styles/TestPage.scss';

import Quizzes from '../components/Quizzes/Quizzes'

class TestPage extends Component {
  render() {
    return (
      <div className="TestPage Row">
        <Container fluid={true}>
          <Row>
            <Col xs={6}>
              <Quizzes/>
            </Col>

            <Col xs={6}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/components/TestPage.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </header>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TestPage;