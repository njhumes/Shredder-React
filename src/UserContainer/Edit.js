import React from 'react';

const Edit = (props) => {
    console.log(props.handleChange, 'props.handleChange');
    return (
        <div>
            <p>Edit Profile</p>
            
            {/* <div class='row'> */}
                <div class="d-none d-md-flex col-md-4 col-lg-6 login-image"></div>
                <div class="login d-flex align-items-center py-5">

                <div class="container">
                <div class="card border-0 shadow my-5">
                    <div class="card-body p-5">
                        <form onSubmit={props.handleUserUpdate}>
                            <div class='form-label-group'>
                                <input type='text' name='username' onChange={props.handleChange} value={props.editUser.username} class='form-control' />
                                <label>Username</label>
                            </div>
                            <div class='form-label-group'>
                                <input type='text' name='email' onChange={props.handleChange} value={props.editUser.email} class='form-control' />
                                <label>Email</label>
                            </div>
                            <div class='form-label-group'>
                                <input type='text' name='firstName' onChange={props.handleChange} value={props.editUser.firstName} class='form-control' />
                                <label>First Name</label>
                            </div>
                            <div class='form-label-group'>
                                <input type='text' name='lastName' onChange={props.handleChange} value={props.editUser.lastName} class='form-control' />
                                <label>Last Name</label>
                            </div>
                            <div class='form-label-group'>
                                <input type='text' name='localMountain' onChange={props.handleChange} value={props.editUser.localMountain} class='form-control' />
                                <label>Local Resort</label>
                            </div>
                                <input type='Submit' class='btn btn-md btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2' />
                        </form>
                        <button onClick={props.deleteUser}>Delete Profile</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Edit;