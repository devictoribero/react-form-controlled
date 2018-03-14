import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Form from './Form/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Form.Layout>
          <Form.Group>
            <Form.Label text='Username' for='user'/>
            <Form.Input
              type ='text'
              name='user'
              value=''
              required
              placeholder={'Write down your username'}
              classes='text-center'
              onHandleChange={alert('hey')}
            />
            <Form.Tip text='This isthis is an error message' />
            <Form.ErrorDisplayer text='this is an error message' />
          </Form.Group>

          <Form.Group>
            <Form.Label text='Password' for='password' />
            <Form.Input
              type ='password'
              value=''
              required
              placeholder={'Write down your password'}
              classes='text-center'
            />
            <Form.Tip text='This isthis is an error message' />
            <Form.ErrorDisplayer text='this is an error message' />
          </Form.Group>

          <button type='submit'>Log in</button>
        </Form.Layout>
      </div>
    );
  }
}

export default App;
