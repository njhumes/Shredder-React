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
    getSnowReport = async () => {
        try {
            const response = await fetch('http://api.weatherunlocked.com/api/forecast/us.80435?app_id=5c214a8b&app_key=60f1597629eab2cb79dd3f818b777ea7', {
                headers: {
                    'Accept': 'application/json'
                }
            })
            const snowReportResponse = await response.json();
            // console.log(response, 'response');
            // console.log(snowReportResponse, 'json response')
            this.setState({
                snowReport: snowReportResponse,
                loaded: true
            })
            console.log(this.state)
        } catch(err) {
            console.log(err)
        }
        
    }
    componentDidMount(){
        this.getSnowReport();
    }
    render(){

        return (
            <div>Three Day Weather Forecast<br/>
                {this.state.loaded ? <ThreeDay snowReport={this.state.snowReport}/> : 'Weather Loading' } 
            </div>
        )
    }
}

export default SnowReport;