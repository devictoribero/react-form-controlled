import React from 'react';

const Layout = props => {
  return(
    <form className='form'>
      {props.children}
    </form>
  );
};

export default Layout;