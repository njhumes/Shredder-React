import React from 'react';

const Edit = (props) => {
    console.log(props.handleChange, 'props.handleChange');
    return (
        <div>
            <p>Edit Profile</p>

            <p>{props.editUser.username}</p>

            <form onSubmit={props.handleUserUpdate}>
                <input type='text' name='username' onChange={props.handleChange} value={props.editUser.username} />
                <input type='text' name='email' onChange={props.handleChange} value={props.editUser.email} />
                <input type='text' name='firstName' onChange={props.handleChange} value={props.editUser.firstName} />
                <input type='text' name='lastName' onChange={props.handleChange} value={props.editUser.lastName} />
                <input type='text' name='localMountain' onChange={props.handleChange} value={props.editUser.localMountain} />
                <input type='text' name='favoriteTrails' onChange={props.handleChange} value={props.editUser.favoriteTrails} />
                <input type='Submit' />
            </form>
        </div>
    )
}

export default Edit;