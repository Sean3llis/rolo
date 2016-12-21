import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div className="well">
      <form>
        <fieldset className="form-group">
          <label htmlFor="signup">Email:</label>
          <Field className="form-control" name="email" component="input" type="text"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="signup">Password:</label>
          <Field className="form-control" name="email" component="input" type="password"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="signup">Confirm Password:</label>
          <Field className="form-control" name="email" component="input" type="password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>

      </form>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return state;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(connect(mapStateToProps, actions)(SignUp));
