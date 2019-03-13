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
                // <div class="container">
                //     <div class="row">
                //         <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-0 shadow">
                                <button onClick={clickResort}>
                                    <Link to={{
                                        pathname: `/resorts/${resort.name}`,
                                        state: {
                                            selectedResort: resort
                                        }
                                    }}>
                                        <p key={resort._id}>
                                            <img className='resort-image' src={resort.logo} alt='resort logo' /><br />
                                            <img className="pass-image" src={resort.passLogo}/><br /> 
                                        </p>
                                    </Link>
                                </button>
                                    {/* <div class="card-body text-center">
                                    //    <h5 class="card-title mb-0">Team Member</h5>
                                      //  <div class="card-text text-black-50">Web Developer</div>
                                  //  </div> */}
                             </div>
                //         </div>
                //     </div>
                // </div>
               
            )
        })
        return(
            <div>
                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12 text-center">
                                {/* <h1 class="font-weight-heavy">Shredder</h1> */}
                                <h1 className='title-heading'>Shreddr</h1>
                                <h3 className="tag-line">Find Your Edge</h3>
                            </div>
                        </div>
                    </div>
                </header>
                <header style={{ "background-color": "#CED0CE" }} class=" text-center py-3 mb-4" >
                    <div class="container">
                        <h2 className='resorts-heading'>Resorts</h2>
                    </div>
                </header>
                <div class="container">
                    <div class="row">
                        <div class="col-md">

                                {allResorts}

                        </div>
                    </div>
                </div>
                {/* <ResortsList resorts={this.state.resorts} /> */}
            </div>
        )
    }
}

export default withRouter(ResortContainer);