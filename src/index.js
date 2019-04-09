import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import SpotifyContext from './components/Spotify/context';
import SpotifyAPI from './components/Spotify/Spotify';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <SpotifyContext.Provider value={new SpotifyAPI()}>
            <App />
        </SpotifyContext.Provider>
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
