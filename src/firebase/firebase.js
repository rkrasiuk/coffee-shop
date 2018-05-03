import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCWvDuMZ3xilv9v2cCp0WONeANsuTscVdk',
  authDomain: 'coffee-shop-8a668.firebaseapp.com',
  databaseURL: 'https://coffee-shop-8a668.firebaseio.com',
  projectId: 'coffee-shop-8a668',
  storageBucket: 'coffee-shop-8a668.appspot.com',
  messagingSenderId: '262104813252'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {auth};
