import React, { Component } from 'react';
import User from '../UserContainer/User';
import Register from './Register';
import TrailContainer from '../TrailContainer';
import { withRouter } from 'react-router-dom'
// Make a register/login button using browser router and link

const Login = (props) => {
  


        // console.log(props.state, 'login props.state')
        return (
            props.state.logged ? 
            <User userInfo={props.state} showUserModal={props.showUserModal} showEditModal={props.showEditModal} handleChange={props.handleChange} handleUserUpdate={props.handleUserUpdate} deleteUser={props.deleteUser}/> 
            : 
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="d-none d-md-flex col-md-4 col-lg-6 login-image"></div>
                        <div class="col-md-8 col-lg-6">
                            <div class="login d-flex align-items-center py-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-9 col-lg-8 mx-auto">
                                            <h3 class="login-heading mb-4">Sign In/Register</h3>
                                                <div className='login-page'>
                                                <Register />
                                                <form onSubmit={props.handleLogin}>
                                                <h5>Login</h5>
                                                    <div class="form-label-group">
                                                        <input type="text" name='username' onChange={props.handleChange} id="inputUsername" class="form-control" required autofocus />
                                                        <label>Username</label>
                                                        
                                                     </div>
                                                    <div class='form-label-group'> 
                                                        <input type='password' name='password' onChange={props.handleChange} id='inputPassword' class='form-control' required />
                                                        <label for='inputPassword'>Password</label>
                                                    </div>
                                                    <input type='Submit' class="btn btn-md btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"/><br/>
                                                    {props.state.message}
                                                    </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
        )
}

export default withRouter(Login);