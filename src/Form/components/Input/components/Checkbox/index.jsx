import React, {Fragment} from 'react';

const Checkbox = props => {
  const _classes = `form__input form__input--checkbox ${props.classes}`;

  return(
    <span className='form__input-wrapper'>
      <input
        type ='checkbox'
        name={props.name}
        checked={props.checked}
        required={props.required}
        disabled={props.disabled}
        className={_classes}

        onChange={props.onHandleChange}
      />{this.props.text}
    </span>
  );
};

export default Checkbox;