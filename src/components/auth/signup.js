import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import AuthError from './error';

class SignUp extends Component {
  localSubmit(formProps) {
    this.props.signUpUser(formProps);
  }

  renderInput(field) {
    const { input, type, meta: { touched, error }} = field;
    return (
      <div>
        <input className="form-control" {...input} type={type} />
        {touched && error && (
          <div className="text-danger">{error}</div>
        )}
      </div>
    );
  }

  render() {
    const { handleSubmit, fields: { username, password, passwordConfirm }} = this.props;
    return (
      <div id="signup" className="contain">
      <form onSubmit={handleSubmit(this.localSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="signup">Username:</label>
          <Field name="username" component={this.renderInput} type="text"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="signup">Password:</label>
          <Field  name="password" component={this.renderInput} type="password"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="signup">Confirm Password:</label>
          <Field className="form-control" name="passwordConfirm" component={this.renderInput} type="password"/>
        </fieldset>

        <fieldset className="form-group">
          <AuthError error={this.props.errorMessage} />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>

      </form>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return { errorMessage: state.auth.errorMessage };
}

function validate(formProps) {
  console.log('formProps ~~>', formProps);
  const errors = {};
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Missmatch'
  }
  return errors;
}

module.exports = reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'passwordConfirm'],
  validate: validate
})(connect(mapStateToProps, actions)(SignUp));
