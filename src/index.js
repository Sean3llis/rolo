import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as firebase from 'firebase';

import { AUTH_USER } from './actions/types';
import reducer from './reducers';

/**
 * COMPONENTS
 */
import App from './components/app';
import AuthWall from './components/auth/wall';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import Welcome from './components/welcome';
import TemplateChooser from './components/templates/chooser';
import Resume from './components/resume/resume';
import Editor from './components/editor';

/**
 * REDUX SETUP
 */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);
const token = localStorage.getItem('TOKEN');
const currentUser = localStorage.getItem('CURRENT_USER');
if (token && currentUser) {
  store.dispatch({
    type: AUTH_USER,
    payload: JSON.parse(currentUser)
  })
}

/**
 * FIREBASE SETUP
 */
const firebaseConfig = {
 apiKey: "AIzaSyCWPwoNMVDsf24lVLNqadOErJBcH9jzt90",
 authDomain: "rolo-5f784.firebaseapp.com",
 databaseURL: "https://rolo-5f784.firebaseio.com",
 storageBucket: "rolo-5f784.appspot.com",
 messagingSenderId: "833209502391"
};
firebase.initializeApp(firebaseConfig);

console.log('firebase ~~>', firebase);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path="signin" component={SignIn}></Route>
        <Route path="signup" component={SignUp}></Route>
        <Route path="signout" component={SignOut}></Route>
        <Route path="templates" component={AuthWall(TemplateChooser)}></Route>
        <Route path=":username" component={Resume}></Route>
        <Route path=":username/edit" component={AuthWall(Editor)}></Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
