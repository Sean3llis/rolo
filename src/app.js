import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';
const store = createStore(reducers);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.signUp = this.signUp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  signUp() {
    console.log('sign up');
    fetch("/signin/twitter", {
      method: "POST"
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('this.state ~~>', this.state);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="container well">
        <div id="sign-up" className="btn btn-info" onClick={e => this.signUp(e)}>
          <i className="fa fa-twitter"></i>
        </div>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>SIGNUP</legend>
            <div className="form-group">

              <label htmlFor="input-password" className="col-lg-2 control-label">Email</label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  id="input-email"
                  placeholder="Email"
                />
              </div>

              <label htmlFor="input-password" className="col-lg-2 control-label">Password</label>
              <div className="col-lg-10">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  id="input-password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="reset" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-info">Submit</button>
              </div>
            </div>
            <input type="hidden" id="sign-up-type" value="local"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
, document.getElementById('root'));
