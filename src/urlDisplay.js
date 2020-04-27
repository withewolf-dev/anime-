import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class urlDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query:''
        }
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                
                    type='text' placeholder='search your anime fan fiction'
                    name='query'
                    onChange={this.handlechange}
                    value={this.state.query}
                />
               
                <Link
                to={`/search/${this.state.query}`}
                >Go!</Link>
            </div>
            
        )
    }
}
