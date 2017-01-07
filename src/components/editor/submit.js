import React from 'react';

export default props => {
  console.log('props ~~>', props);
  return (
    <button action="submit" disabled={props.disabled}>Save</button>
  )
}
