import React from 'react';

const Group = props => {
  return(
    <div className='form__group'>
      {props.children}
    </div>
  );
};

export default Group;