import './App.css';
import Home from "./Home"
import './App.css'
import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import MainMarket from './main_market/MainMarket';



export default class App extends Component {
 
  state = {
   all_players: [], 
   all_products: [], 
   all_sellers: [], 
   current_user: ""
 }

componentDidMount(){

    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(players => this.setState(
        {all_players: players}
    )
  )
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => this.setState(
      {all_products: products}
    ))

    fetch('http://localhost:3000/sellers')
    .then(res => res.json())
    .then(sellers => this.setState(
      {all_sellers: sellers}
    ))

} 

currentUser = (obj) => {

  this.setState({
    current_user: obj.username
  })
}


 

 render() {
  return(
   <div className = "login">

     <Switch>
  

     <Route path = "/">
        <Home currentUser = {this.currentUser}></Home>
     </Route>
        

     </Switch>
   </div>
    )
   }
 }







