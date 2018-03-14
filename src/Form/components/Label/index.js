import React from 'react';

const Label = props => {
  return(
    <label className='form__label' for={props.forField}>
      {props.text}
    </label>
  );
};

export default Label;