import './App.css';
import Home from "./Home"
import './App.css'
import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';




export default class App extends Component {
 state = {}
 
 
 render() {
  return(
   <div className = "login">

     <Switch>

     <Route path = "/">
        <Home></Home>
     </Route>

     </Switch>
   </div>
    )
   }
 }







