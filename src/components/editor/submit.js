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

export default props => {
  const style = (props.disabled)
  ? {...submitStyles, backgroundColor: STYLES.LIGHT_MEDIUM_GRAY, color: STYLES.MEDIUM_GRAY}
  : {...submitStyles, backgroundColor: props.color || STYLES.DARK_GRAY}
  console.log('style.backgroundColor ~~>', style.backgroundColor);
  return (
    <button
      onClick={e => props.onClick(e)}
      action="submit"
      style={{...style, ...props.style}}
      disabled={props.disabled}>
        Save
    </button>
  )
}
