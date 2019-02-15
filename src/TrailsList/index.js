import React from 'react';
import SnowReport from '../SnowReport';
import { withRouter } from 'react-router-dom'
// import { Document } from 'react-pdf';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'
const TrailList = (props) => {
    const allTrails = props.trails.map((trail) => {
        return (
            
                        <ListGroup className='trail-block'>
                            <ListGroupItem key={trail._id}>
                                Name: {trail.name}<br />
                                Resort: {trail.resort}<br />
                                Difficulty: {trail.difficulty}<br />
                            </ListGroupItem>
                        </ListGroup>
        )
    })
    return (
        <div>
            <h2>Keystone Resort</h2> <br/>
            <iframe src="https://fatmap.com/48/Keystone/piste,freeride,ski_tour,hiking,biking/@39.595432,-105.9458659,2374.7635709,-26.5009809,157.6874283,3110.1123267,normal" frameBorder="" allowFullscreen="" width="750" height="450"></iframe>

            <SnowReport /><br/><br/>
                <Container>
                    <h4>Trails</h4>
                    <Row>
                        {/* <Col xs="6" sm="4"> */}
                         {allTrails}
                        {/* </Col> */}
                    </Row>
                </Container><br/><br/>
                <a href='https://darksky.net/poweredby/'>Powered By DarkSky</a>

            

        </div>
    )
}


export default withRouter(TrailList);