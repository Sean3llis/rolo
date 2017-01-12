import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as STYLES from '../styles';

/**
 * COMPONENTS:
 */
import AuthError from '../auth/error';
import ContactInput from './contact';
import ColorPicker from './color';
import textInput from './input.text';
import textAreaInput from './input.textarea';
import Submit from './submit';
import renderProjects from './projects';
import Label from './label';

import resumeData from '../resume/mock-resume';
import Classic from '../templates/classic';

const userDefaults = {
  name: 'YOUR NAME',
  color: STYLES.PRIMARY,
  blurb: 'Write something about yourself'
}

/**
 * CONFIGS:
 */
const contactFields = [
  { name: 'email', icon: 'envelope', placeHolder: 'you@snailmail.com' },
  { name: 'phone', icon: 'phone', placeHolder: '(555) 867-5309' },
  { name: 'linkedin', icon: 'linkedin', placeHolder: 'https://www.linkedin.com/in/sean3llis' },
  { name: 'github', icon: 'github', placeHolder: 'https://www.github.com/sean3llis' },
  { name: 'twitter', icon: 'twitter', placeHolder: 'https://www.twitter.com/sean3llis' }
];

const styling = {
  formArea: {
    backgroundColor: STYLES.LIGHT_MEDIUM_GRAY,
    height: '100%',
    padding: 0
  },
  formInner: {
    overflowY: 'scroll',
    height: window.innerHeight,
    padding: '0px 20px'
  },
  previewArea: {
    backgroundColor: STYLES.LIGHT_GRAY,
    padding: 0,
    overflowY: 'scroll',
    height: window.innerHeight
  },
  titleBar: {
    backgroundColor: STYLES.DARK_GRAY,
    textAlign: 'center',
    height: 40,
    lineHeight: '40px'
  },
  editBar: {
    borderRight: STYLES.BORDER
  }
};

class ResumeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleFormSubmit(formData) {
    console.log('submitted: ~~>', formData);
    this.props.updateUser(formData, this.props.currentUser._id);
  }

  render() {
    if (!this.props.currentUser) return null;
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <div id="editor">
      <div id="editor-row" className="row">
      <div className="col-sm-4" style={styling.formArea}>
        <div style={styling.titleBar}><i className="fa fa-eye"></i></div>
        <div className="form-inner" style={styling.formInner}>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <fieldset>
            <Label htmlFor="name">Name</Label>
            <Field name="name" component={textInput} />
          </fieldset>

          <fieldset>
            <Label htmlFor="blurb">Blurb</Label>
            <Field name="blurb" component={textAreaInput} />
          </fieldset>

          <fieldset>
            <Label htmlFor="name">Name</Label>
            {contactFields.map((contact, i) => (
              <Field
                key={i}
                name={contact.name}
                icon={contact.icon}
                placeHolder={contact.placeHolder}
                component={ContactInput} />
            ))}
          </fieldset>

          <fieldset>
            <Label htmlFor="color">Theme Color</Label>
            <Field name="color" color={this.props.currentUser.color} component={ColorPicker} />
          </fieldset>

          <fieldset>
            <AuthError error={this.props.errorMessage} />
          </fieldset>

          <fieldset>
            <Label htmlFor="projects">Projects</Label>
            <FieldArray name="projects" component={renderProjects}/>
          </fieldset>

          <Submit disabled={pristine || submitting}>Save</Submit>

        </form>
        </div>
        </div>
        <div className="col-sm-8" style={styling.previewArea}>
        <div style={styling.titleBar}><i className="fa fa-eye"></i></div>

          <Classic viewingUser={this.props.currentUser} formData={this.props.formData} data={resumeData} />
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  let newState = {
    message: state.auth.message,
    currentUser: state.auth.currentUser,
    initialValues: {...userDefaults, ...state.auth.currentUser}
  };
  if (state.form && state.form.editor) newState.formData = state.form.editor.values;
  return newState;
}

ResumeEditor = reduxForm({
  form: 'editor',
  enableReinitialize: true,
  fields: [
    'name',
    'blurb',
    'color',
    'projects',
    'github',
    'twitter',
    'linkedin',
    'email'
  ],
})(ResumeEditor);

ResumeEditor = connect(mapStateToProps, actions)(ResumeEditor)

export default ResumeEditor;
