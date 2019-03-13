import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            localMountain: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegistration = async (e) => {
        console.log('tester')
        e.preventDefault();
        try {
            const registrationResponse = await fetch('http://localhost:9000/user/register', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(registrationResponse)
            if (!registrationResponse.ok) {
                throw Error(registrationResponse.statusText)
            } else {
                const parsedRegistration = await registrationResponse.json();
                console.log(parsedRegistration, 'registration response parsed');
                this.props.history.push('/')
            }
            

        } catch(err) {
            console.log('err err ')
            console.log(err);
        }
    }

    render(){
        console.log(this.props);
        console.log(this.state)
        return (
            // <div className='login-page'>
                <form onSubmit={this.handleRegistration}>
                    <h5>Register</h5>
                    <div class='form-label-group'>
                        <input type='email' name='email' class='form-control' onChange={this.handleChange} required />
                        <label>Email</label>
                    </div>
                    <div class='form-label-group'>
                        <input type='text' name='username' class='form-control' onChange={this.handleChange} required />
                        <label>Username</label>
                    </div>
                    <div class='form-label-group'>
                        <input type='password' name='password' class='form-control' onChange={this.handleChange} required/>
                        <label>Password</label>
                    </div>
                    <div class='form-label-group'>
                        <input type='text' name='firstName' class='form-control' onChange={this.handleChange} />
                        <label>First Name</label>
                    </div>
                    <div class='form-label-group'>
                        <input type='text' name='lastName' class='form-control' onChange={this.handleChange} />
                        <label>Last Name</label>
                    </div>
                    <div class='form-label-group'>
                        <input type='text' name='localMountain' class='form-control' onChange={this.handleChange} />
                        <label>Local Resort</label>
                    </div>
                    <input type='Submit' class="btn btn-md btn-success btn-block btn-login text-uppercase font-weight-bold mb-2" />
                    <br /><br />
                </form>
            // </div>
        )
    }
}


export default withRouter(Register);