import React from 'react';
import SnowReport from '../SnowReport';
import { Link, withRouter } from 'react-router-dom'
// import { Document } from 'react-pdf';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'
const TrailList = (props) => {

    const allTrails = props.trails.map((trail) => {
        return (
            props.selectedResort.name === trail.resort ? 
                <ListGroup className='trail-block'>
                    <ListGroupItem key={trail._id}>
                        <strong>Name:</strong> {trail.name}<br />
                        <strong>Resort:</strong> {trail.resort}<br />
                        <strong>Difficulty:</strong> {trail.difficulty}<br />
                        <strong>Category:</strong> {trail.category}<br />
                        <strong>Notes:</strong> {trail.notes}<br />
                        <button class='btn btn-md btn-secondary font-weight-bold mb-2' onClick={props.addFavorite.bind(null, trail._id)}>Add to Favorites</button>
                    </ListGroupItem>
                </ListGroup> : null     
        )
    })
    console.log(props, 'trailL props')
    return (
        <div>
            <h2 className='resorts-heading'>{props.selectedResort.name}</h2>
            <div className='top-weather'>
                <SnowReport resort={props.selectedResort}/><br/><br/>
            </div>
            <div className='bottom-trails'>
                <h2>Trails</h2>
                <iframe src={props.selectedResort.fatmap} frameBorder="" allowFullscreen="" width="750" height="450"></iframe> <br/><br/>
                <Container>
                    <button className='btn btn-md btn-success font-weight-bold mb-2 addTrail-btn'>
                        <Link to={{
                            pathname: `/trails`,
                            state: {
                                selectedResort: props.selectedResort
                            }
                        }}>
                            <span className='addTrail-btn'>Upload Your Own Trail</span>
                        </Link>
                    </button>
                    <Row>
                        {/* <Col xs="6" sm="4"> */}
                        {allTrails}
                        {/* </Col> */}
                    </Row>
                </Container><br /><br />
            </div>
            
                

            

        </div>
    )
}


export default withRouter(TrailList);