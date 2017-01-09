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
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <div id="editor" className="contain">
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
            <Field name="color" component={ColorPicker} />
          </fieldset>

          <fieldset>
            <AuthError error={this.props.errorMessage} />
          </fieldset>

          <fieldset style={{paddingLeft: 15}}>
            <Label htmlFor="projects">Projects</Label>
            <FieldArray name="projects" component={renderProjects}/>
          </fieldset>

          <Submit disabled={pristine || submitting}>Save</Submit>

        </form>
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
  fields: ['name', 'blurb', 'color', 'projects'],
  enableReinitialize: true
})(ResumeEditor);

ResumeEditor = connect(mapStateToProps, actions)(ResumeEditor)

export default ResumeEditor;
