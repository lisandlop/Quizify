import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'; 
import Row from 'react-bootstrap/Row';

import { withSpotify } from '../Spotify';

class SpotifyLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.props.spotify.getAccessToken() !== null ? true : false,
      name: '',
      userImage: ''
    }
  }

  componentDidMount() {
    if (this.state.loggedIn) {
      this.props.spotify.getMe().then(response => {
        this.setState({
          name: response.display_name,
          userImage: response.images[0].url
        })
      })
    }
  }

  signOut() {
    this.props.spotify.logOut();
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div className="SpotifyLogin">
        {!this.state.loggedIn 
          ? <Button variant="success" style={{margin: '4em'}} onClick={() => this.props.spotify.authenticateSpotify()}>
					    Log in to Spotify
            </Button>
          : <div style={{color: 'white'}}>
              <br />
              {this.state.name !== '' 
                ? <div>
                    <h1>Welcome, </h1>
                    <h1>{this.state.name}!</h1>
                  </div>
                : <h1>Welcome!</h1>}
              <Image src={this.state.userImage} style={{width: '50%'}} roundedCircle/>
              <Row>
                <Button variant="light" onClick={() => this.signOut()} style={{margin: '1em 10em', alignItems: 'center'}} block>
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
