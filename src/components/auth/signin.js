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
    console.log('this.props ~~>', this.props);
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div className="well">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <fieldset className="form-group">
          <label htmlFor="">Email:</label>
          <Field className="form-control" name="email" component="input" type="text"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Password:</label>
          <Field className="form-control" name="password" component="input" type="password"/>
        </fieldset>

        <fieldset className="form-group">
          <AuthError error={this.props.errorMessage} />
        </fieldset>

        <button action="submit" className="btn btn-primary">Sign In</button>

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
