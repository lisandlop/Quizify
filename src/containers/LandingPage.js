import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

import '../styles/LandingPage.scss';

import * as ROUTES from '../constants/routes';
import { withSpotify } from '../components/Spotify';
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
                {this.props.spotify.getAccessToken() !== null
                  ? <Button href={ROUTES.SELECT} size="lg" block>Play quiz</Button>
                  : <Button href={ROUTES.SELECT} size="lg" block disabled>Play quiz</Button>}
              </Row>
              <Row>
                {this.props.spotify.getAccessToken() !== null
                  ? <Button href={ROUTES.CREATE} size="lg" block>Create quiz</Button>
                  : <Button href={ROUTES.CREATE} size="lg" block disabled>Create quiz</Button>}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withSpotify(LandingPage);