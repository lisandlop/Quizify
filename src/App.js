import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LandingPage from './containers/LandingPage';
import SelectPage from './containers/SelectPage';
import QuizPage from './containers/QuizPage';
import NoMatch from './containers/NoMatch';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>
      
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route exact path={ROUTES.SELECT} component={SelectPage}/>
        <Route exact path={ROUTES.PLAY} component={QuizPage}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
