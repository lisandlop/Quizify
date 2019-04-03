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
      console.log('Setting name')
      this.props.spotify.getUserInfo().then(response => {
        console.log(response)
        this.setState({
          name: response.display_name,
          userImage: response.images[0].url
        })
      })
    }
  }

  render() {
    console.log('Rendering')
    return (
      <div className="SpotifyLogin">
				{!this.props.spotify.state.loggedIn ? 
        (<button className="btn btn-success" style={{margin: '4em'}}onClick={() => this.props.spotify.authenticateSpotify()}>
					Log in to Spotify
				</button>) : 
				(<div style={{color: 'white'}}>
          <br />
          <h1>Welcome, </h1>
          <h1>{this.state.name}!</h1>
          <Image src={this.state.userImage} style={{width: '50%'}} roundedCircle/>
          <Row>
            <button style={{margin: '5em', alignItems: 'center'}}>
              Log out
            </button>
          </Row>
        </div>)
        }
			</div>
    );
  }
}

export default withSpotify(SpotifyLogin);
