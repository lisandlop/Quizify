import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>

      <Route exact path={ROUTES.LANDING} component={LandingPage}/>
    </div>
  </Router>
);

export default App;
