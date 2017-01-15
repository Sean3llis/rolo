import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as STYLES from '../styles';

import Label from './label';
import TextInput from './input.text';
import TextAreaInput from './input.textarea';
const styling = {
  add: {
    backgroundColor: STYLES.DARK_GRAY,
    color: STYLES.OFF_WHITE,
    borderRadius: '2px 2px 0px 0px'
  },
  project: {
    position: 'relative',
    backgroundColor: STYLES.LIGHT_GRAY,
    padding: '30px 10px',
    marginBottom: 6,
    marginTop: 6,
    borderBottom: STYLES.BORDER_SHADOW
  },
  delete: {
    position: 'absolute',
    width: 'auto',
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: '20px',
    padding: 0,
    height: 20,
    width: 20,
    borderRadius: 0,
    backgroundColor: STYLES.DANGER,
    color: STYLES.OFF_WHITE,
  },
  counter: {
    position: 'absolute',
    top: 20,
    color: STYLES.OFF_WHITE,
    backgroundColor: STYLES.DARK_GRAY,
    textAlign: 'center'
  },
};


export default ({ fields, meta: { touched, error } }) => (
  <div>
    <button style={styling.add} type="button" onClick={() => fields.push({})}>
      <i className="fa fa-plus"></i>
    </button>
    {touched && error && <span>{error}</span>}
    {fields.map((project, i) => (
      <div className="project" key={i} style={styling.project}>
        <div className="counter" style={{...styling.delete, ...styling.counter}}>{i + 1}</div>
        <button
          type="button"
          title="Remove Member"
          style={styling.delete}
          onClick={() => fields.remove(i)}>
          <i className="fa fa-times"></i>
        </button>

        <fieldset>
          <Label style={styling.projectLabel}>Title</Label>
          <Field
            name={`${project}.title`}
            type="text"
            component={TextInput} />
        </fieldset>

        <fieldset>
          <Label style={styling.projectLabel}>Link</Label>
          <Field
            name={`${project}.link`}
            type="text"
            component={TextInput} />
        </fieldset>

        <fieldset>
          <Label style={styling.projectLabel}>Description</Label>
          <Field
              name={`${project}.description`}
              type="textarea"
              component={TextAreaInput}/>
        </fieldset>
      </div>
    ))}
  </div>
);


//
// <div key={index}>
//   <button
//     type="button"
//     title="Remove Member"
//     onClick={() => fields.remove(index)}>Delete</button>
//   <h4>Member #{index + 1}</h4>
//   <Field
//     name={`${project}.firstName`}
//     type="text"
//     component={Project}
//     label="First Name"/>
//   {/* <FieldArray name={`${project}.hobbies`} component={renderProject}/> */}
// </div>
