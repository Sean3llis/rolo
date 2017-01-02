import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AuthError from '../auth/error';

const textInput = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
);

const textAreaInput = (field) => {
  return (
    <div>
      <textarea rows="10" {...field.input} />
    </div>
  )
};

class ResumeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    // this.props.fetchUser();
  }

  handleFormSubmit(formData) {
    console.log('submitted update');
    this.props.updateUser(formData, this.props.currentUser._id);
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <div id="editor" className="contain">
        <div>Edit Your Resume Below!</div>
        <div>Message: </div>
        <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <fieldset className="form-group">
            <label htmlFor="name">Name:</label>
            <Field className="form-control" name="name" component={textInput} />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="blurb">Blurb:</label>
            <Field className="form-control" name="blurb" component={textAreaInput} />
          </fieldset>

          {/* <fieldset className="form-group">
            <label htmlFor="blurb">textarea:</label>
            <Field className="form-control" name="blurb" component={textAreaInput} />
          </fieldset> */}

          <fieldset className="form-group">
            <AuthError error={this.props.errorMessage} />
          </fieldset>

          <button action="submit" disabled={pristine || submitting} className="btn btn-primary">Save</button>

        </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return {
    message: state.auth.message,
    currentUser: state.auth.currentUser,
    initialValues: {...state.auth.currentUser}
  };
}

ResumeEditor = reduxForm({
  form: 'editor',
  fields: ['name', 'username', 'blurb'],
  enableReinitialize: true
})(ResumeEditor);

ResumeEditor = connect(mapStateToProps, actions)(ResumeEditor)

export default ResumeEditor;

// export default reduxForm({
//   form: 'editor',
//   fields: ['name', 'blurb']
// })(connect(mapStateToProps, actions)(ResumeEditor));
