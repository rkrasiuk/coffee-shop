import React from 'react';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

import SignForm from './SignForm';

const SignUpPage = () => (
  <SignForm
    heading='Register'
    label='Sign Up'
    authFunc={auth.doCreateUserWithEmailAndPassword}
    redirect={routes.HOME} />
)

export default SignUpPage;
