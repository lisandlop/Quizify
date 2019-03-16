import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './containers/LandingPage';
import TestPage from './containers/TestPage';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Navigation/>
      
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route path={ROUTES.TEST} component={TestPage}/>
      </Switch>
    </div>
  </Router>
);

export default App;
