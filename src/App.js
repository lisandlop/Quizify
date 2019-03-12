import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage';

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
