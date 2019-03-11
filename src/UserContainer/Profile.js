import React from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'

const Profile = (props) => {
    console.log(props, 'props on Profile page')
    const userFavorites = props.showUser.favoriteTrails.map((trail) => {
        return(
            <ListGroup className='trail-block'>
                <ListGroupItem key={trail._id}>
                    <strong>Name:</strong> {trail.name}<br />
                    <strong>Resort:</strong> {trail.resort}<br />
                    <strong>Difficulty:</strong> {trail.difficulty}<br />
                </ListGroupItem>
            </ListGroup>
            
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