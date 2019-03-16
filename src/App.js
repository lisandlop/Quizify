import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation/Navigation'
import LandingPage from './containers/LandingPage';
import TestPage from './containers/TestPage';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>
      
      <Route exact path={ROUTES.LANDING} component={LandingPage}/>
      <Route path={ROUTES.TEST} component={TestPage}/>
    </div>
  </Router>
);

export default App;
