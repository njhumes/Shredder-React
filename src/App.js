import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TrailContainer from './TrailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TrailContainer />

      </div>
    );
  }
}

export default App;
