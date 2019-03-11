import React, { Component } from 'react';
import TrailList from '../TrailsList';
import { withRouter } from 'react-router-dom'
require('dotenv').config();

class TrailContainer extends Component {
    constructor() {
        super();
        this.state = {
            trails: [],

        }
    }
    componentDidMount(){
        this.getTrails();
    }
    getTrails = async () => {
        try {
            // this will get the trails from the express api
            const apiResponse = await fetch(process.env.REACT_APP_BACKEND + '/trails');
            // console.log(apiResponse, '===== apiResponse');
            const parsedTrails = await apiResponse.json();
            // console.log(parsedTrails, '~~~ parsedTrails')
            this.setState({
                trails: parsedTrails.data
            })
            // console.log(this.state.trails, '000 this.state.trails')
        } catch(err) {
            console.log(err);
        }
    }

    addFavorite = async (trail_id) => {
        console.log(this.state, 'tc state')
        try {
        const favoriteResponse = await fetch(process.env.REACT_APP_BACKEND + '/user/trails/' + trail_id, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(favoriteResponse);
        const parsedFavorite = await favoriteResponse.json();
        console.log(parsedFavorite);
        this.setState({

        })
        } catch(err) {
        console.log(err)
        }
  }

    render(){
        // console.log(this.props, 'trailC props');
        // console.log(this.props.location.state)
        // console.log(this.props.location.state.selectedResort)
        // console.log(this.state, 'trailC state')
        return (
            <div>  
                <TrailList trails={this.state.trails} selectedResort={this.props.location.state.selectedResort} addFavorite={this.addFavorite} />
            </div>
        )
    }
}


export default withRouter(TrailContainer);