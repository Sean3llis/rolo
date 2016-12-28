import React from 'react';

export default props => {
  if (props.error) {
    return (
      <div className="alert alert-danger">
        <h5>Almost!</h5>
        <strong>{props.error.toString()}</strong>
      </div>
    );
  } else {
    return <span></span>
  }
}
