import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AuthError from './error';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div className="contain">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <fieldset>
          <label htmlFor="">Email:</label>
          <Field name="email" component="input" type="text"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Password:</label>
          <Field name="password" component="input" type="password"/>
        </fieldset>

        <fieldset>
          <AuthError error={this.props.errorMessage} />
        </fieldset>

        <button action="submit">Sign In</button>

      </form>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return { errorMessage: state.auth.errorMessage };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(mapStateToProps, actions)(SignIn));
