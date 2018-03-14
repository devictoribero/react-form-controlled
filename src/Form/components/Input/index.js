import React from 'react';

const Input = props => {
  const _classes = `form__input ${props.classes}`;

  return(
    <input
      type ={props.type}
      name={props.name}
      value={props.value}
      required={props.required}
      placeholder={props.placeholder}
      className={_classes}

      onChange={props.onHandleChange}
    />
  );
};

export default Input;