import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from '../reducers';
import Home from './HomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Navigation from './Navigation';
import OrderPage from './OrderPage';
import WaitPage from './WaitPage';

import * as routes from '../constants/routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Router>
            <Switch>
              <Route path={routes.WAIT} component={WaitPage} />
              <Route path={routes.ORDER} component={OrderPage} />
              <Route path={routes.MAIN} component={Navigation} />
              <Route path={routes.SIGN_UP} component={SignUpPage} />
              <Route path={routes.SIGN_IN} component={SignInPage} />
              <Route path={routes.HOME} component={Home} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
