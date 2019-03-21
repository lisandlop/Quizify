import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './containers/LandingPage';
import SelectPage from './containers/SelectPage';
import QuizPage from './containers/QuizPage';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>
      
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route path={ROUTES.SELECT} component={SelectPage}/>
        <Route path={ROUTES.PLAY} component={QuizPage}/>
      </Switch>
    </div>
  </Router>
);

export default App;
