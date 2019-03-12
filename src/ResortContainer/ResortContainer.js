import React, { Component } from 'react';
import TrailList from '../TrailsList';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import ResortsList from './ResortsList';
import TrailContainer from '../TrailContainer/index';
require('dotenv').config();

class ResortContainer extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            resorts: [],
            selectedResort: []
        }
    }

    componentDidMount(){
        this.getResorts();
    }

    getResorts = async () => {
        try {
            const resortResponse = await fetch('http://localhost:9000/resorts');
            // console.log(resortResponse);
            const parsedResorts = await resortResponse.json();
            this.setState({
                loaded: true,
                resorts: parsedResorts.data
            })
            // console.log(this.state)
            // console.log(this.state.resorts)
            // console.log(this.state.resorts[0])
            // console.log(this.state.resorts[0].name)
        } catch(err) {
            console.log(err)
        }
    }

    render(){
        console.log(this.state)
        const allResorts = this.state.resorts.map((resort) => {
            const clickResort = () => {
                this.setState({
                    selectedResort: resort
            })
        }
            return(
                <button onClick={clickResort}>
                <Link to={{
                    pathname: `/resorts/${resort.name}`,
                    state: {
                        selectedResort: resort
                    }
                }}> 
                        <li key={resort._id}>
                            {resort.name}<br />
                            <img src={resort.logo} alt='resort logo'/><br />
                            {resort.pass}<br />
                        </li>

                </Link>
                </button>
            )
        })
        return(
            <div>
                <h1 className='title-heading'>Shredder</h1>
                <ul className='resort-links'>
                    {allResorts}
                </ul>
                {/* <ResortsList resorts={this.state.resorts} /> */}
            </div>
        )
    }
}

export default withRouter(ResortContainer);