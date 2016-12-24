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
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import TemplateChooser from './components/templates/chooser';
import Resume from './components/resume/resume';
import ResumeEditor from './components/resume/editor';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SignIn}></Route>
        <Route path="signup" component={SignUp}></Route>
        <Route path="signout" component={SignOut}></Route>
        <Route path="templates" component={TemplateChooser}></Route>
        <Route path="resume" component={Resume}></Route>
        <Route path="resume/edit" component={ResumeEditor}></Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
