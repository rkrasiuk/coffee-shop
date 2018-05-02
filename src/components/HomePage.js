import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const HomePage = () => (
  <div style={{textAllign: 'center'}}>
    <Link to={routes.SIGN_IN}>
      <RaisedButton name='signIn' label='SIGN IN' primary={true} />
    </Link>
    <Link to={routes.SIGN_UP}>
      <FlatButton name='signUp' label='SIGN UP'
      style={{paddingLeft: '-5%'}} />
    </Link>
  </div>
)

export default HomePage;
