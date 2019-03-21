import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/LandingPage.scss';
import SpotifyLogin from '../components/SpotifyLogin/SpotifyLogin';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Container fluid={true}>
          <Row>
            <Col xs={6}>
              <SpotifyLogin/>
            </Col>

            <Col xs={6}>
              <h1>Landing page</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;