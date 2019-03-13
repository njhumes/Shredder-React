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
            <div class="container">
                <div class="card border-0 shadow my-5">
                    <div class="card-body p-5">
            <h1 class="font-weight-light">Your Profile</h1>
            <p class='lead'>Email: {props.showUser.email}</p>
            <p class='lead'>Username: {props.showUser.username} </p>
            <p class='lead'>First Name: {props.showUser.firstName} </p>
            <p class='lead'>Last Name: {props.showUser.lastName} </p>
            <p class='lead'>Favorite Trails: {userFavorites} </p>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Profile;