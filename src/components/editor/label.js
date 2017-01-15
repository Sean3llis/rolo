import React from 'react';
import * as STYLES from '../styles';

const styling = {
  display: 'block',
  textAlign: 'center',
  fontSize: 14,
  letterSpacing: 2,
  color: STYLES.MEDIUM_GRAY,
};

export default props => (
  <label style={{...styling, ...props.style}} htmlFor={props.htmlFor}>{props.children}</label>
);
