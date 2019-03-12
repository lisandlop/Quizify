import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../logo.svg';
import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage Row">
        <Container fluid={true}>
          <Row>
            <Col xs={6}></Col>

            <Col xs={6}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/components/LandingPage.js</code> and save to reload.
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

export default LandingPage;