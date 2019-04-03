import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'; 
import Row from 'react-bootstrap/Row';

import { withSpotify } from '../Spotify';

class SpotifyLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userImage: ''
    }
  }

  componentDidMount() {
    if (this.props.spotify.state.loggedIn) {
      this.props.spotify.getUserInfo().then(response => {
        this.setState({
          name: response.display_name,
          userImage: response.images[0].url
        })
      })
    }
  }

  render() {
    return (
      <div className="SpotifyLogin">
        {!this.props.spotify.state.loggedIn 
          ? <Button variant="success" style={{margin: '4em'}} onClick={() => this.props.spotify.authenticateSpotify()}>
					    Log in to Spotify
            </Button>
          : <div style={{color: 'white'}}>
              <br />
              <h1>Welcome, </h1>
              <h1>{this.state.name}!</h1>
              <Image src={this.state.userImage} style={{width: '50%'}} roundedCircle/>
              <Row>
                <Button variant="light" style={{margin: '1em 10em', alignItems: 'center'}} block>
                  Log out
                </Button>
              </Row>
            </div>
        }
			</div>
    );
  }
}

export default withSpotify(SpotifyLogin);
