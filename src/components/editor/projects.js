import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as STYLES from '../styles';

import Label from './label';
import TextInput from './input.text';
import TextAreaInput from './input.textarea';
const styling = {
  add: {
    backgroundColor: STYLES.PRIMARY,
    color: STYLES.OFF_WHITE,
    borderRadius: '2px 2px 0px 0px'
  },
  project: {
    position: 'relative',
    backgroundColor: STYLES.LIGHT_GRAY,
    padding: '30px 10px',
    marginBottom: 6
  },
  projectRow: {
    marginBottom: 10
  },
  delete: {
    position: 'absolute',
    width: 'auto',
    top: 0,
    left: -20,
    padding: 2,
    fontSize: 12,
    lineHeight: '12px',
    backgroundColor: STYLES.DANGER,
    color: STYLES.OFF_WHITE,
  },
  counter: {
    position: 'absolute',
    left: -20,
    top: 20,
    color: STYLES.MEDIUM_GRAY
  },
  projectLabel: {
    marginBottom: 0,
    marginTop: 10,
    textAlign: 'right'
  }
};


export default ({ fields, meta: { touched, error } }) => (
  <div>
    <button style={styling.add} type="button" onClick={() => fields.push({})}>
      <i className="fa fa-plus"></i>
    </button>
    {touched && error && <span>{error}</span>}
    {fields.map((project, i) => (
      <div className="project" key={i} style={styling.project}>
        <button
          type="button"
          title="Remove Member"
          style={styling.delete}
          onClick={() => fields.remove(i)}><i className="fa fa-times"></i></button>
        <div className="counter" style={styling.counter}>{i + 1}</div>
        <div className="row" style={styling.projectRow}>
          <div className="col-sm-2"><Label style={styling.projectLabel}>Title</Label></div>
          <div className="col-sm-10">
            <Field
              name={`${project}.title`}
              type="text"
              component={TextInput} />
          </div>
        </div>
        <div className="row" style={styling.projectRow}>
          <div className="col-sm-2"><Label style={styling.projectLabel}>Link</Label></div>
          <div className="col-sm-10">
            <Field
              name={`${project}.link`}
              type="text"
              component={TextInput} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2"><Label style={styling.projectLabel}>Description</Label></div>
          <div className="col-sm-10">
            <Field
              name={`${project}.description`}
              type="textarea"
              component={TextAreaInput}/>
          </div>
        </div>
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
