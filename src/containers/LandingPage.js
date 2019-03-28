import React, { Component, Link } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

import '../styles/LandingPage.scss';

import Spotify from '../components/Spotify/Spotify'
import * as ROUTES from '../constants/routes';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage backpage">
        <Container fluid={true}>
          <Row>
            <Col xs={12} sm={6}>
              <Spotify/>
            </Col>

            <Col xs={12} sm={6} id="StartOrCreateCol">
              <Row>
                <Button href={ROUTES.SELECT} variant="warning" size="lg" block>Play quiz</Button>
              </Row>
              <Row>
                <Button variant="warning" size="lg" block disabled>Create quiz</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;