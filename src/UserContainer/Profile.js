import React from 'react';

const Profile = (props) => {
    console.log(props, 'props on Profile page')
    const userFavorites = props.showUser.favoriteTrails.map((trail) => {
        return(
        <p>{trail.name}</p>
            
        )
    })
    return (
        <div>
            Your Profile
            <ul>
                <li>Email: {props.showUser.email}</li>
                <li>Username: {props.showUser.username}</li>
                <li>First Name: {props.showUser.firstName}</li>
                <li>Last Name: {props.showUser.lastName}</li>
                <li>Local Mountain: {props.showUser.localMountain}</li>
                <li>Favorite Trails: {userFavorites}</li>

            </ul>
        </div>
    )
}
export default Profile;