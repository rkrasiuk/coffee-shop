import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './HomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Navigation from './Navigation';
import OrderPage from './OrderPage';
import WaitPage from './WaitPage';

import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path={routes.WAIT} component={WaitPage} />
            <Route exact path={routes.ORDER} component={OrderPage} />
            <Route exact path={routes.MAIN} component={Navigation} />
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route path={routes.HOME} component={Home} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
