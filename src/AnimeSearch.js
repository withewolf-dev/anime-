import React, { Component } from 'react'
export default class AnimeSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
   
    render() {
        return (
            
           <div>
               <h1> anime api testing</h1>
               {this.props.query}
           </div>
            
        )
    }
}
