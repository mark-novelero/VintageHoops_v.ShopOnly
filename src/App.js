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

    fetch('http://localhost:3000/sellers')
    .then(res => res.json())
    .then(sellers => 
       this.setState(
      {all_sellers: sellers}
    ))
} 

getSeller = (sellerObj) =>{
  
    let userInfo = {
      username: sellerObj.username, 
      password: sellerObj.password
    }

    fetch('http://localhost:3000/login', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify(userInfo),
   })
    .then (res => res.json())
    .then (user => {
    this.setState({
      current_user: user.username
    })
  })


}


 

 render() {
  return(
   <div className = "login">

     <Switch>
  

     <Route path = "/main">
        <MainMarket products = {this.state.all_sellers}/>
     </Route>

     <Route path = "/">
        <Home></Home>
     </Route>

     
        

     </Switch>
   </div>
    )
   }
 }







