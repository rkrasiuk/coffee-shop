import React from 'react';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

import SignForm from './SignForm';

const SignInPage = (props) => (
  <SignForm
    heading='Login'
    label='Sign In'
    authFunc={auth.doSignInWithEmailAndPassword}
    redirect={routes.MAIN} />
)

export default SignInPage;
