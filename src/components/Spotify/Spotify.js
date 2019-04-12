import Spotify from 'spotify-web-api-js';
import queryString from 'querystring';

class SpotifyAPI extends Spotify {
	constructor() {
		super();
		
		const params = this.getHashParams();
		
		//Fetch stored access token (user already logged in)
		if (JSON.parse(localStorage.getItem("spotifyToken"))) {
			let spotifyToken = JSON.parse(localStorage.getItem("spotifyToken"));

			//Check if the access token is still valid, else flags for timeout
			if (new Date().getTime() - parseInt(spotifyToken.timeStamp) < spotifyToken.timeOut)  {
				this.setAccessToken(spotifyToken.value)
			}
			else {
				this.userTimedOut = true;
			}
		}
		
		//Set new access token (user logged in or updated login)
		if (params.access_token) {
			this.setAccessToken(params.access_token)

			let spotifyToken = {value: params.access_token, timeStamp: new Date().getTime(), timeOut: (params.expires_in-300)*1000}
			localStorage.setItem('spotifyToken', JSON.stringify(spotifyToken));
		}
	}

	authenticateSpotify() {
		const scope = 'user-read-private user-read-email user-read-playback-state';
		const authUrl = 'https://accounts.spotify.com/authorize?' + queryString.stringify({
			response_type: 'token',
      client_id: 'a67493ba28914f69ac66dc7f6324c467',
      scope: scope,
			redirect_uri: document.URL.substring(0, document.URL.indexOf('/', 10))
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

	playAudio(trackID) {
		this.getTrack(trackID).then((response) => {
			if (this.audio !== undefined) {
				this.audio.pause();
			}
			
			this.audio = new Audio(response.preview_url)
			this.audio.play();
		})
	}

	logOut() {
		this.setAccessToken(null);
		localStorage.removeItem('spotifyToken');
	}
}

export default SpotifyAPI;


