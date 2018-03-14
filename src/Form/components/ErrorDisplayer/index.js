import React from 'react';

const ErrorDisplayer = props => {
  return(
    <span className='form__error-displayer'>{props.text}</span>
  );
};

export default ErrorDisplayer;