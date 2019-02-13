import React, { Component } from 'react';
import User from '../UserContainer/User';
import Register from './Register';

class Login extends Component {
    constructor(){
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
            
        }
    }
// show user modal and a show edit modal? you click the show user modal to display the user's info
// from there, could click the edit button to display the edit modal? 

// make a shoe user page? might just have it as on the User componenet
// Could also just be a part of the edit modal? 

// make a show edit modal function to pass into the Edit component 
// have a handle edit form function to pass into the edit componenet
// make a delete user function to pass into the edit component

// this allows users to toggle their show profile or edit modals
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
            const response = await fetch('http://localhost:9000/user/' + this.state._id, {
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

        } catch(err) {
            console.log(err);
        }
    }

    handleLogin = async (e) => {
        e.preventDefault();
        // console.log('handle login button works');
        try {
            console.log('handle login inside the try');
            const loginResponse = await fetch('http://localhost:9000/user/login', {
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
            // console.log(parsedLogin, 'login response parsed');
            // console.log(parsedLogin.data, 'parsedLogin.data')
            if (parsedLogin.data === 'successful login'){
                // console.log(this.state, 'this.state before logincheck')
                // console.log('====they got logged in ====')
                this.setState({
                    logged: true, ...parsedLogin.info
                })
                // console.log(this.state, 'this.state after login')
            }
            // console.log(parsedLogin.info, 'parsedLogin.info');

        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            // if logged in, show User container, else, show reg/login 
           this.state.logged ? <User userInfo={this.state} showUserModal={this.showUserModal} showEditModal={this.showEditModal} handleChange={this.handleChange} handleUserUpdate={this.handleUserUpdate} /> : 
            <div> 
                <Register />
                <form onSubmit={this.handleLogin}>
                   Login:<br />
                   <label>
                       Username:
                    <input type='text' name='username' onChange={this.handleChange} />
                   </label>
                   <label>
                       Password:
                    <input type='password' name='password' onChange={this.handleChange} />
                   </label>
                   <input type='Submit' />
               </form>
            </div>
        )
    }
}

export default Login;