import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AuthError from '../auth/error';

class ResumeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    // this.props.authenticateUser();
  }

  handleFormSubmit(formData) {
    console.log('submitted update');
    this.props.updateUser(formData, this.props.currentUser._id);
  }

  render() {
    const { handleSubmit, fields: { name, blurb }} = this.props;
    return (
      <div id="editor" className="contain">
        <div>Edit Your Resume Below!</div>
        <div>Message: </div>
        <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <fieldset className="form-group">
            <label htmlFor="name">Name:</label>
            <Field className="form-control" name="name" component="input" type="text"/>
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="blurb">Blurb:</label>
            <Field className="form-control" name="blurb" component="input" type="textarea"/>
          </fieldset>

          <fieldset className="form-group">
            <AuthError error={this.props.errorMessage} />
          </fieldset>

          <button action="submit" className="btn btn-primary">Save</button>

        </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return {
    message: state.auth.message,
    currentUser: state.auth.currentUser
  };
}

export default reduxForm({
  form: 'signin',
  fields: ['name', 'blurb']
})(connect(mapStateToProps, actions)(ResumeEditor));
