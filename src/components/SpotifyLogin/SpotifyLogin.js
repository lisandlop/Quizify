import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import queryString from 'querystring';

import { withSpotify } from '../Spotify';

class SpotifyLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SpotifyLogin">
				{!this.props.spotify.state.loggedIn ? 
        (<button className="btn btn-success" onClick={() => this.props.spotify.authenticateSpotify()}>
					Log in to Spotify
				</button>) : 
				(<div>
          <h1>Logged in</h1>
				</div>)}
			</div>
    );
  }
}

export default withSpotify(SpotifyLogin);
