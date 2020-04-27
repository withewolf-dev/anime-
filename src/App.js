import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:[]
    }
  }

  async componentDidMount(){

    let arr = []
    axios.get(`https://api.jikan.moe/v3/anime/1/episodes`).then(res=> res.data).then(titles=>{
      this.setState({
        title:titles
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Api testing here...</h1>
      
      </div>
    )
  }
}







// import React from 'react'
// import {Switch,Route} from 'react-router-dom'
// import AnimeSearch from './AnimeSearch'
// import urlDisplay from './urlDisplay'
//  function App() {
//   return (
//     <div>
//      <AnimeSearch/>
//      <urlDisplay/>
//       <Route
//         exact path='/search/:name'
//         render ={(routeProps)=> <AnimeSearch 
//         query={routeProps.match.params.name}/>}
//       />
//     </div>
//   )
// }
// export default App