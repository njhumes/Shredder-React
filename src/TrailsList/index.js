import React from 'react';
import SnowReport from '../SnowReport';


const TrailList = (props) => {
    const allTrails = props.trails.map((trail) => {
        return (
            <li key={trail._id}>
                Name: {trail.name}<br/>
                Resort: {trail.resort}<br/>
                Difficulty: {trail.difficulty}<br/><br/>
            </li>
        )
    })


    return (
        <div>
           Keystone Trail List Page
            <ul>
                {allTrails}
                <SnowReport />
            </ul>

        </div>
    )
}


export default TrailList;