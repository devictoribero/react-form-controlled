import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Form from './Form/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      has_errors: false,
    };
  }

  _handleEmailInputChange = (event) => {
    console.log(event);
    this.setState({ email: event.target.value });
  };

  render() {
    return (
        <Form.Layout>
          <Form.Group>
            <Form.Label text='Email' forField='email'/>
            <Form.Input
              type='email'
              name='email'
              value=''
              required
              placeholder='Write down your email account'
              classes='text-center'
              onHandleChange={this._handleEmailInputChange}
            />
            <Form.Tip text='This is an tip saying its required or somrthing' />
            <Form.ErrorDisplayer text='This is an error message' />
          </Form.Group>

          <Form.Group>
            <Form.Label text='Password' forField='password' />
            <Form.Input
              type='password'
              value=''
              required
              placeholder={'Write down your password'}
              classes='text-center'
            />
            <Form.Tip text='This is an tip saying its required or somrthing' />
            <Form.ErrorDisplayer text='This is an error message' />
          </Form.Group>

          <button type='submit'>Log in</button>
        </Form.Layout>
    );
  }
}

export default App;
