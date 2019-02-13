import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TrailContainer from './TrailContainer';
import Login from './Authentication/Login';
import Register from './Authentication/Register'
import Header from './Header';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route exact path='/trails' component={ TrailContainer } />
        </Switch>
      </div>
    )
  }
}

export default App;
