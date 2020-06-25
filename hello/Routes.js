import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'

const Routes = () => (
   <Router onStateChange={(e)=>console.log("router change", e)}>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} on={(e)=>console.log("enter home", e)} />
         <Scene key = "about" component = {About} title = "About" on={(e)=>console.log("enter about", e)} />
      </Scene>
   </Router>
)
export default Routes