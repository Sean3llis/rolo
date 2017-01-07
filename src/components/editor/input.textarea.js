import React from 'react';

export default (field) => {
  return (
    <div>
      <textarea rows="10" {...field.input} />
    </div>
  )
};
