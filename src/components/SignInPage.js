import React from 'react';

import {auth} from '../firebase';
import * as routes from '../constants/routes';

import SignForm from './SignForm';

const SignInPage = () => (
  <div className='signBox'>
    <SignForm
      heading='Login'
      label='Sign In'
      authFunc={auth.doSignInWithEmailAndPassword}
      redirect={routes.MAIN}
      signIn
    />
  </div>
);

export default SignInPage;
