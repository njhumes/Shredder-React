import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TrailContainer from './TrailContainer';
import Login from './Authentication/Login';
import Register from './Authentication/Register'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Register />
          <Login />
          <TrailContainer />

      </div>
    );
  }
}

export default App;
