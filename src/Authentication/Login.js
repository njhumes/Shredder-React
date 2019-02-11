import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = async (e) => {
        e.preventDefault();
        console.log('handle login button works');
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
            console.log(loginResponse, 'loginResponse')
            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }
            const parsedLogin = await loginResponse.json();
            console.log(parsedLogin, 'login response parsed');
            console.log(parsedLogin.data, 'parsedLogin.data')


        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
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
        )
    }
}

export default Login;