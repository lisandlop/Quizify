import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import queryString from 'querystring';

const spotifyWebApi = new Spotify();

class SpotifyAPI extends Component {
	constructor() {
		super();
		const params = this.getHashParams();

		this.state = {
			loggedIn: params.access_token ? true : false,
			nowPlaying: {
				name: 'Not checked',
				image: ''
			}
		}

		if (params.access_token) {
			spotifyWebApi.setAccessToken(params.access_token)
		}
	}

	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
				q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
				hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}

	getNowPlaying() {
		spotifyWebApi.getMyCurrentPlaybackState()
			.then((response) => {
				console.log(response)
				this.setState({
					nowPlaying: {
						name: response.item ? response.item.name : 'No song',
						image: response.item ? response.item.album.images[0].url : ''
					}
				})
			})
	}

	render() {
		const scope = 'user-read-private user-read-email user-read-playback-state';
		const authUrl = 'https://accounts.spotify.com/authorize?' + queryString.stringify({
			response_type: 'token',
      client_id: 'a67493ba28914f69ac66dc7f6324c467',
      scope: scope,
      redirect_uri: 'http://localhost:3000'
		})

    return (
			<div className="SpotifyLogIn">
				<a className="btn btn-success" href={authUrl}>
					Log in to Spotify
				</a>

				<div style={{color: '#eee'}}>Now playing: {this.state.nowPlaying.name}</div>
				<div style={{marginBottom: '20px'}}>
					<img src={this.state.nowPlaying.image} style={{width: '100px'}}/>
				</div>

				<button className="btn btn-light" onClick={() => this.getNowPlaying()}>Refresh 'now playing'</button>
			</div>
    );
  }
}

export default SpotifyAPI;

