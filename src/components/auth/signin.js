import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
  }

  alert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <h5>Almost!</h5>
          <strong>{this.props.errorMessage.toString()}</strong>
        </div>
      );
    }
  }

  render() {
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
          {this.alert()}
        </fieldset>

        <fieldset className="form-group">
          <button action="submit" className="btn btn-primary">Sign In</button>
        </fieldset>

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
