import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const HomePage = () => (
  <div id='home-box'>
    <img alt='coffee icon' src='images/HomePageCoffeeIcon.png' />
    <h1>Coffee Shop</h1>
    <Link to={routes.SIGN_IN}>
      <RaisedButton
        name='signIn'
        label='SIGN IN'
        primary
        className='homeButton'
      />
    </Link>
    <Link to={routes.SIGN_UP}>
      <FlatButton
        name='signUp'
        label='SIGN UP'
        className='homeButton' />
    </Link>
  </div>
)

export default HomePage;
