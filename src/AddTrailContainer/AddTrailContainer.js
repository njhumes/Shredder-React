import React, { Component } from 'react';
import TrailList from '../TrailsList';
import { Form, Switch, Route, Link, withRouter } from 'react-router-dom'
import ResortsList from '../ResortContainer/ResortsList';
import TrailContainer from '../TrailContainer/index';

class AddTrailContainer extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            resort: '',
            difficulty: '',
            category: '',
            notes: ''
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addTrail = async (e) => {
        e.preventDefault()
        try {
            const trailResponse = await fetch(process.env.REACT_APP_BACKEND + '/trails', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(trailResponse ,'trailResponse')
            const jsonTrail = await trailResponse.json();
            console.log(jsonTrail)
            this.props.history.goBack();
        } catch(err) {
            console.log(err);
        }
    }


    render(){
        console.log(this.props, 'atc this.props')
        console.log(this.state, 'atc this.state')
        return(
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                        <h3 class="login-heading mb-4">Add Your Own Trail!</h3>
                        <form onSubmit={this.addTrail}>
                            <div class="form-label-group">
                                <input type="text" name='name' onChange={this.handleChange} id="inputEmail" class="form-control" placeholder='Name' required autofocus/>
                            <label for="inputEmail">Trail Name</label>
                            </div>

                            <div class="form-label-group">
                                <input type="text" name='resort' onChange={this.handleChange} id="inputPassword" class="form-control" placeholder="Resort" required />
                                <label for="inputPassword">Resort</label>
                            </div>

                            <div>
                                <select name='difficulty' onChange={this.handleChange} class="form-control" id='selectDifficulty'>
                                    <option value='Green'>Green</option>
                                    <option value='Blue'>Blue</option>
                                    <option value='Black Diamond'>Black Diamond</option>
                                    <option value='Double Black'>Double Black</option>    
                                </select>
                                <label for='selectDifficulty'>Difficulty</label>
                            </div>
                            <div>
                                <select name='category' onChange={this.handleChange} class="form-control">
                                    <option value='Groomers'>Groomers</option>
                                    <option value='Moguls'>Moguls</option>
                                    <option value='Tree Run'>Tree Run</option>
                                    <option value='Terrain Park'>Terrain Park</option>
                                    <option value='Off-Piste'>Off-Piste</option>
                                    <option value='Backcountry'>Backcountry</option>
                                </select>
                                <label>Category</label>
                            </div>
                            <div class="form-label-group">
                                <textarea name='notes' onChange={this.handleChange}></textarea>
                                <label>Notes</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Upload Trail</button>
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        )
    }
}



export default withRouter(AddTrailContainer);