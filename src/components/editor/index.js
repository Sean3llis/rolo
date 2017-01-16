import React, { Component, propTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
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
  form: {
    position: 'relative',
  },
  formInner: {
    overflowY: 'scroll',
    height: window.innerHeight,
    padding: '40px 20px',
  },
  previewArea: {
    backgroundColor: STYLES.LIGHT_GRAY,
    padding: 0,
    overflowY: 'scroll',
    height: window.innerHeight
  },
  titleBar: {
    position: 'relative',
    backgroundColor: STYLES.DARK_GRAY,
    color: STYLES.OFF_WHITE,
    textAlign: 'center',
    height: STYLES.TITLE_HEIGHT,
    lineHeight: '40px',
    fontSize: 14,
    letterSpacing: 2
  },
  editBar: {
    borderRight: STYLES.BORDER
  },
  lowerSubmit: {
    position: 'relative',
    height: 40,
    fontSize: 14,
    letterSpacing: 2,
    lineHeight: '16px',
    width: '100%'
  }
};

class ResumeEditor extends Component {
  handleFormSubmit(formData) {
    this.props.updateUser(formData, this.props.currentUser._id);
    localStorage.setItem('CURRENT_USER', JSON.stringify(formData));
    browserHistory.push('/');
  }

  renderColorPicker() {
    if (this.props.themeColor) {
      return (
        <fieldset>
          <Label htmlFor="color">Theme Color</Label>
          <Field name="color" initialColor={this.props.themeColor} component={ColorPicker} />
        </fieldset>
      );
    } else {
      return null;
    }
  }

  render() {
    if (!this.props.currentUser) return null;
    const { handleSubmit, pristine, submitting, reset, submit } = this.props;
    return (
      <div id="editor">
      <div id="editor-row" className="row">
      <div className="col-sm-4" style={styling.formArea}>
        <div style={styling.titleBar}>
          <i className="fa fa-pencil-square-o"></i> EDIT PROFILE
          <Submit color={this.props.themeColor} onClick={handleSubmit(this.handleFormSubmit.bind(this))} disabled={pristine || submitting}>Save</Submit>
        </div>
        <div className="form-inner" style={styling.formInner}>
        <form id="editor" style={styling.form}>

          <div className="row">
            <div className="col-sm-6" style={{paddingLeft: 0}}>
            <fieldset>
              <Label htmlFor="name">Name</Label>
              <Field name="name" component={textInput} />
            </fieldset>
            </div>
            <div className="col-sm-6" style={{paddingRight: 0}}>
            <fieldset>
              <Label htmlFor="title">Title</Label>
              <Field name="title" component={textInput} />
            </fieldset>
            </div>
          </div>

          <fieldset>
            <Label htmlFor="blurb">Blurb</Label>
            <Field name="blurb" component={textAreaInput} />
          </fieldset>

          <fieldset>
            <Label htmlFor="contacts">Contacts</Label>
            {contactFields.map((contact, i) => {
              return (
                <Field
                  key={i}
                  name={contact.name}
                  icon={contact.icon}
                  color={this.props.themeColor}
                  placeHolder={contact.placeHolder}
                  component={ContactInput} />
              )
            })}
          </fieldset>

          {this.renderColorPicker()}

          <fieldset>
            <AuthError error={this.props.errorMessage} />
          </fieldset>

          <fieldset>
            <Label htmlFor="projects">Projects</Label>
            <FieldArray name="projects" component={renderProjects}/>
          </fieldset>

          <Submit
            color={this.props.themeColor}
            style={styling.lowerSubmit}
            onClick={handleSubmit(this.handleFormSubmit.bind(this))}
            disabled={pristine || submitting}>
            Save
          </Submit>
        </form>
        </div>
        </div>
        <div className="col-sm-8" style={styling.previewArea}>
        <div style={styling.titleBar}><i className="fa fa-eye"></i> PREVIEW PROFILE</div>
          <Classic viewingUser={this.props.currentUser} data={this.props.formData} />
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
    initialValues: {...userDefaults, ...state.auth.currentUser},
    themeColor: state.resume.themeColor
  };
  if (state.form && state.form.editor) newState.formData = state.form.editor.values;
  return newState;
}

ResumeEditor = reduxForm({
  form: 'editor',
  enableReinitialize: true,
  fields: [
    'name',
    'title',
    'blurb',
    'color',
    'projects',
    'github',
    'twitter',
    'linkedin',
    'email',
    'phone'
  ],
})(ResumeEditor);

ResumeEditor = connect(mapStateToProps, actions)(ResumeEditor)

export default ResumeEditor;
