import React from 'react';
import * as STYLES from '../styles';

const styling = {
  input: {
    borderBottom: STYLES.BORDER_SHADOW
  }
};

export default (field) => (
  <div className="input-row">
    <input {...field.input} type="text" style={styling.input}/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
);
