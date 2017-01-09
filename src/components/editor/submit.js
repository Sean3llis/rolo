import React from 'react';
import * as STYLES from '../styles';

const submitStyles = {
  fontSize: 12,
  color: STYLES.OFF_WHITE,
  textAlign: 'center'
}

const enabledStyles = {
  ...submitStyles,
  backgroundColor: STYLES.PRIMARY
}

const disabledStyles = {
  ...submitStyles,
  backgroundColor: STYLES.LIGHT_MEDIUM_GRAY,
  color: STYLES.MEDIUM_GRAY
}
export default props => {
  const styling = (props.disabled)
    ? disabledStyles
    : enabledStyles;
  return (
    <button action="submit" style={styling} disabled={props.disabled}>Save</button>
  )
}
