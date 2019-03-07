import React from 'react';
import { withRouter } from 'react-router-dom'

const ResortsList = (props) => {
    console.log(props)
    const allResorts = props.resorts.map((resort) => {
        return(
            <li key={resort._id}>
                {resort.name}<br />
                {resort.logo}
            </li>
        )
    })

    return(
        <div>
            ResortsList
            <ul>
                {allResorts}
            </ul>
        </div>
    )
}

export default withRouter(ResortsList);