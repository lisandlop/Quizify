import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

import '../styles/LandingPage.scss';

import * as ROUTES from '../constants/routes';
import SpotifyLogin from '../components/SpotifyLogin/SpotifyLogin';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage backpage">
        <Container fluid={true}>
          <Row>
            <Col xs={12} sm={6}>
              <SpotifyLogin/>
            </Col>

            <Col xs={12} sm={6} id="StartOrCreateCol">
              <Row>
                <Button href={ROUTES.SELECT} variant="warning" size="lg" block>Play quiz</Button>
              </Row>
              <Row>
                <Button href={ROUTES.CREATE} variant="warning" size="lg" block>Create quiz</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;