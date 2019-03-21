import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import queryString from 'querystring';

class SpotifyAPI extends Component {
	constructor() {
		super();
		
		console.log("New Spotify")
		const spotifyWebApi = new Spotify();
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

	authenticateSpotify() {
		const scope = 'user-read-private user-read-email user-read-playback-state';
		const authUrl = 'https://accounts.spotify.com/authorize?' + queryString.stringify({
			response_type: 'token',
      client_id: 'a67493ba28914f69ac66dc7f6324c467',
      scope: scope,
			// redirect_uri: 'https://kthquizify.firebaseapp.com'
			redirect_uri: 'http://localhost:3000'
		})

		window.location.replace(authUrl);
	}

	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
				q = window.location.hash.substring(1);
		while (e = r.exec(q)) {
				hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}

	getNowPlaying() {
		this.spotifyWebApi.getMyCurrentPlaybackState()
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

	getUserInfo () {
		this.spotifyWebApi.getMe()
			.then((response) => {
				console.log(response)
			})
	}
}

export default SpotifyAPI;


