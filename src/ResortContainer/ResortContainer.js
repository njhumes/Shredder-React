import React, { Component } from 'react';
import TrailList from '../TrailsList';
import { withRouter } from 'react-router-dom'
import ResortsList from './ResortsList';
require('dotenv').config();

class ResortContainer extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            resorts: []
        }
    }

    componentDidMount(){
        this.getResorts();
    }

    getResorts = async () => {
        try {
            const resortResponse = await fetch('http://localhost:9000/resorts');
            console.log(resortResponse);
            const parsedResorts = await resortResponse.json();
            this.setState({
                loaded: true,
                resorts: parsedResorts.data
            })

            console.log(this.state)
            console.log(this.state.resorts)
            console.log(this.state.resorts[0])
            console.log(this.state.resorts[0].name)
        } catch(err) {
            console.log(err)
        }
    }

    render(){

        return(
            <div>
                <ResortsList resorts={this.state.resorts}/>
            </div>
        )
    }
}

export default withRouter(ResortContainer);