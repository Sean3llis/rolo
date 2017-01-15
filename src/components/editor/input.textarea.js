import React from 'react';
import * as STYLES from '../styles';

export default (field) => {
  return (
    <div>
      <textarea rows="10" {...field.input} style={{borderBottom: STYLES.BORDER_SHADOW}} />
    </div>
  )
};
