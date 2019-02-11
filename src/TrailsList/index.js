import React from 'react';


const TrailList = (props) => {
    console.log(props, 'props');
    console.log(props.trails, 'props.trails');
    // console.log(props.trails[0].name, 'props.trails');
    // console.log(props.data, 'props.data');
    // console.log(props.trails.data, 'props.trails.data');

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
            Trail List
            <ul>
                {allTrails}
            </ul>

        </div>
    )
}


export default TrailList;