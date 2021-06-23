import './App.css';
import Home from "./Home"
import './App.css'
import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import MainMarket from './main_market/MainMarket';
import UserPage from './userpages/UserPage';
import SellNew from './SellNew';
import ItemCard from './ItemCard'


export default class App extends Component {
 
  state = {
   all_players: [], 
   all_products: [], 
   all_sellers: [], 
   current_user: "", 
   current_user_products: [], 
   token: false, 
   main_photo: {}
 }

componentDidMount(){

  fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(products => this.setState(
    {all_products: products}
  ))

    fetch('http://localhost:3000/sellers', {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(sellers => 
       this.setState(
      {all_sellers: sellers}
    ))
} 

getSeller = (sellerObj) =>{
  
  console.log(sellerObj)

    fetch('http://localhost:3000/login', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify({
        username: sellerObj.username, 
        password: sellerObj.password
      }),
   })
    .then (res => res.json())
    .then (userInfo => {
      localStorage.token = userInfo.token
      this.localToken(sellerObj)
      this.getUserProducts()
    })

}

localToken =(obj)=>{

  if (localStorage.token !== "undefined" && localStorage.length === 1){
    this.setState({
      current_user: obj.username, 
      token: !this.state.token
    })
  }
}



getUserProducts = () => {
  const currentSeller = this.state.all_sellers.find(seller => seller.username===this.state.current_user)

  this.setState({
    current_user_products: currentSeller.products
  })
}


 

 render() {
  return(
   <div className = "login">

     <Switch>

    <Route path = "/sell">
      <SellNew></SellNew>
    </Route>

    <Route path = "/item">
      <ItemCard></ItemCard>
    </Route>
  
    <Route path = "/userpage">
      <UserPage userProducts = {this.state.current_user_products} currentUser = {this.state.current_user}></UserPage>
    </Route>

     <Route path = "/main">
        <MainMarket products = {this.state.all_products}/>
     </Route>

     <Route path = "/">
        <Home getSeller = {this.getSeller} token= {this.state.token} currentUser = {this.state.current_user}></Home>
     </Route>
        

     </Switch>
   </div>
    )
   }
 }







