import React from 'react';
import * as STYLES from '../styles';

const styling = {
  row: {
    position: 'relative',
    height: 40,
    overflow: 'hidden',
    marginBottom: 10,
    borderRadius: 2
  },
  icon: {
    position: 'absolute',
    width: 40,
    lineHeight: '40px',
    textAlign: 'center',
    backgroundColor: STYLES.DARK_GRAY,
  },
  span: {
    color: STYLES.OFF_WHITE,
    fontSize: 14,
  },
  input: {
    height: '100%',
    paddingLeft: 50,
    fontSize: 12
  }
};

export default field => {
  const iconClass = `fa fa-${field.icon}`;
  return (
    <div className="input-row" style={styling.row}>
      <div style={styling.icon}><i className={iconClass} style={styling.span}></i></div>
      <input {...field.input} type="text" style={styling.input} placeholder={field.placeHolder} />
      {field.meta.touched && field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>
  );
}
