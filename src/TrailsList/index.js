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
            <h2>{props.selectedResort.name}</h2> <br/>
            <iframe src={props.selectedResort.fatmap} frameBorder="" allowFullscreen="" width="750" height="450"></iframe>

            <SnowReport resort={props.selectedResort}/><br/><br/>
                <Container>
                    <h4>Trails</h4>
                    {/* button link to addtrail container  pass in selectedResort props*/}
                    <button> 
                        <Link to={{
                            pathname: `/trails`,
                            state: {
                                selectedResort: props.selectedResort
                            }
                        }}>
                            Add Your Own Trail
                        </Link>
                    </button>
                    <Row>
                        {/* <Col xs="6" sm="4"> */}
                         {allTrails}
                        {/* </Col> */}
                    </Row>
                </Container><br/><br/>
                

            

        </div>
    )
}


export default withRouter(TrailList);