import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AuthError from '../auth/error';

const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
);

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
    console.log('this.props.initialValues ~~>', this.props.initialValues);
    const { handleSubmit, fields: { name, blurb }} = this.props;
    return (
      <div id="editor" className="contain">
        <div>Edit Your Resume Below!</div>
        <div>Message: </div>
        <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <fieldset className="form-group">
            <label htmlFor="name">Name:</label>
            <Field className="form-control" name="name" component={renderField} />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="blurb">Blurb:</label>
            <Field className="form-control" name="blurb" component={renderField} />
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
  console.log('state ~~>', state);
  return {
    message: state.auth.message,
    currentUser: state.auth.currentUser,
    initialValues: {...state.auth.currentUser}
  };
}

ResumeEditor = reduxForm({
  form: 'editor',
  fields: ['name', 'blurb'],
  enableReinitialize: true
})(ResumeEditor);

ResumeEditor = connect(mapStateToProps, actions)(ResumeEditor)

export default ResumeEditor;

// export default reduxForm({
//   form: 'editor',
//   fields: ['name', 'blurb']
// })(connect(mapStateToProps, actions)(ResumeEditor));
