import React from 'react';

const SpotifyContext = React.createContext(null);

export const withSpotify = Component => props => (
  <SpotifyContext.Consumer>
    {spotify => <Component {...props} spotify={spotify} />}
  </SpotifyContext.Consumer>
);

export default SpotifyContext;