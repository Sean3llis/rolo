import React from 'react';
import * as STYLES from '../styles';

const styling = {
  display: 'block',
  textAlign: 'center',
  marginBottom: 12,
  fontSize: 12,
  letterSpacing: 1,
  color: STYLES.MEDIUM_GRAY
};

export default props => (
  <label style={{...styling, ...props.style}} htmlFor={props.htmlFor}>{props.children}</label>
);
