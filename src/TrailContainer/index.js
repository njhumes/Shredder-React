import React, { Component } from 'react';
import TrailList from '../TrailsList';
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
            const apiResponse = await fetch(process.env.REACT_APP_API_URL);
            // console.log(apiResponse, '===== apiResponse');
            const parsedTrails = await apiResponse.json();
            console.log(parsedTrails, '~~~ parsedTrails')
            this.setState({
                trails: parsedTrails.data
            })
            // console.log(this.state.trails, '000 this.state.trails')
        } catch(err) {
            console.log(err);
        }
    }


    render(){

        return (
            <div>
                Trail Container
                <TrailList trails={this.state.trails} />
            </div>
        )
    }
}


export default TrailContainer;