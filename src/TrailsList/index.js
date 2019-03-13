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
                        <button onClick={props.addFavorite.bind(null, trail._id)}>Add to Favorites</button>
                    </ListGroupItem>
                </ListGroup> : null     
        )
    })
    console.log(props, 'trailL props')
    return (
        <div>
            <h2>{props.selectedResort.name}</h2> <br/>
            {/* <iframe src="https://fatmap.com/48/Keystone/piste,freeride,ski_tour,hiking,biking/@39.595432,-105.9458659,2374.7635709,-26.5009809,157.6874283,3110.1123267,normal" frameBorder="" allowFullscreen="" width="750" height="450"></iframe> */}

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