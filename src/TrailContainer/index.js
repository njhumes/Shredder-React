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
            // console.log(parsedTrails, '~~~ parsedTrails')
            this.setState({
                trails: parsedTrails.data
            })
            // console.log(this.state.trails, '000 this.state.trails')
        } catch(err) {
            console.log(err);
        }
    }


    render(){
        // list of resorts with links to their page?
        console.log(this.props.username, 'trail container propsusername');
        console.log(this.state, 'trail container this.state')
        return (
            <div>
                <h1>Trail Contaier </h1>
                <p> Hello! {this.props.username}</p>
                <p>Loggedin? {this.props.logged}</p>
                <h2>Keystone Resort</h2>    
                <TrailList trails={this.state.trails} />
            </div>
        )
    }
}


export default TrailContainer;