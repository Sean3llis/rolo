import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducer from './reducers';

import App from './components/app';
import SignIn from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SignIn}></Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
