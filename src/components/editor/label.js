import React from 'react';
import * as STYLES from '../styles';

const styling = {
  fontSize: 12,
  letterSpacing: 1,
  color: STYLES.MEDIUM_GRAY
};

export default props => (
  <label style={styling} htmlFor={props.htmlFor}>{props.children}</label>
);
