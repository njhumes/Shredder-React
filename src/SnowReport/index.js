import React, { Component } from 'react';
import ThreeDay from './ThreeDay';

class SnowReport extends Component{
    constructor(){
        super();
        this.state = {
            snowReport: {},
            loaded: false
        }
    }
    componentDidMount() {
        this.getSnowReport();
    }
    getSnowReport = async () => {
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b1aace2c20e4dfa633787a8d4c203eb/${this.props.resort.lat},${this.props.resort.long}`, {
                // headers: {
                //     'Accept': 'application/json'
                // }
            })
            let snowReportResponse = await response.json();
            // console.log(response, 'response');
            // console.log(snowReportResponse, 'json response')
            this.setState({
                snowReport: snowReportResponse,
                loaded: true
            })
            // console.log(this.state)
        } catch(err) {
            console.log(err)
        }
        
    }
   
    render(){
        // console.log(this.props, 'snowReport props');
        // console.log(this.props.resort, 'snowReport props.resort');
        return (
            <div>
                {this.state.loaded ? <ThreeDay snowReport={this.state.snowReport}/> : 'Weather Loading' } 
            </div>
        )
    }
}

export default SnowReport;