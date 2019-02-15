import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import TrailContainer from './TrailContainer';
import Login from './Authentication/Login';
import Register from './Authentication/Register'
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      localMountain: '',
      favoriteTrails: [],
      logged: false,
      showUserModal: false,
      showEditModal: false,
      message: '',
    }
  }

  showUserModal = () => {
    this.setState({
      showUserModal: !this.state.showUserModal
    })
  }
  showEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
  }

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.target.value })
  }

  handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_USERSLASH_API_URL + this.state._id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await response.json();
      console.log(parsedResponse, 'parsedResponse put')
      //this.setState is parsedRsponse.data
      this.setState({
        showEditModal: false, ...parsedResponse.data
      })

    } catch (err) {
      console.log(err);
    }
  }

  deleteUser = async (e) => {
    const deleteResponse = await fetch(process.env.REACT_APP_USERSLASH_API_URL + this.state._id, {
      method: 'DELETE',
      credentials: 'include'
    })
    const deleted = await deleteResponse.json();
    console.log(deleted.data)
    this.setState({
      showEditModal: false,
      logged: false
    })

  }

  handleLogin = async (e) => {
    e.preventDefault();
    // console.log('handle login button works');
    try {
      console.log('handle login inside the try');
      const loginResponse = await fetch(process.env.REACT_APP_USERSLASH_API_URL + 'login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }
      const parsedLogin = await loginResponse.json();
      if (parsedLogin.data === 'successful login') {
        this.setState({
          logged: true, message: '', ...parsedLogin.info
        })
        this.props.history.push('/trails');
      } else {
          this.setState({
            message: 'Incorrect Username or Password'
          })
        // display something that tells them incorrect password/username
      }


    } catch (err) {
      console.log(err);
    }
  }

 


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <Login state={this.state} showUserModal={this.showUserModal} showEditModal={this.showEditModal} handleChange={this.handleChange} handleUserUpdate={this.handleUserUpdate} deleteUser={this.deleteUser} handleLogin={this.handleLogin} />} />
          <Route exact path='/trails' render={(props) => <TrailContainer username={this.state.username} favoriteTrails={this.state.favoriteTrails} /> } />
        </Switch>
        
      </div>
    )
  }
}

export default withRouter(App);
