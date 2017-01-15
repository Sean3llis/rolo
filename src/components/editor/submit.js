import React from 'react';
import * as STYLES from '../styles';

const submitStyles = {
  fontSize: 16,
  lineHeight: '16px',
  borderRadius: 0,
  color: STYLES.OFF_WHITE,
  textAlign: 'center',
  position: 'absolute',
  width: 100,
  height: '100%',
  right: 0,
}

const enabledStyles = {
  ...submitStyles,
  backgroundColor: STYLES.DARK_GRAY,
}

const disabledStyles = {
  ...submitStyles,
  backgroundColor: STYLES.LIGHT_MEDIUM_GRAY,
  color: STYLES.MEDIUM_GRAY,
}
export default props => {
  const styling = (props.disabled)
    ? disabledStyles
    : enabledStyles;
  const color = (props.color)
    ? color
    : STYLES.PRIMARY
  return (
    <button
      onClick={e => props.onClick(e)}
      action="submit"
      style={{...styling, ...props.style}}
      disabled={props.disabled}>
        Save
    </button>
  )
}
