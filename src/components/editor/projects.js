import React from 'react';

const renderProject = () => {

};

export default ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Member</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}/>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"/>
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"/>
        <FieldArray name={`${member}.hobbies`} component={renderHobbies}/>
      </li>
    )}
  </ul>
);
