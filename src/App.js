import './App.css';
import Home from "./Home"
import './App.css'
import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import MainMarket from './main_market/MainMarket';
import UserPage from './userpages/UserPage';
import SellNew from './SellNew';
import FixedHeader from './header/FixedHeader';
import UserItem from './userpages/UserItem';


export default class App extends Component {
 
  state = {
   all_players: [], 
   all_products: [], 
   all_sellers: [], 
   current_user: "", 
   current_user_products: [], 
   newItemPublished: false, 
   token: false, 
   main_photo: {}, 
   selectUserProduct: {}
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

createNewProduct =(obj)=> {

  const newProduct = {
    player_id: 8,
    seller_id: 12,
    title: obj.title,
    product_type: obj.product_type,
    team: obj.team,
    image: obj.image,
    desc: obj.desc,
    size: obj.size,
    price: obj.price
  }

  

  fetch('http://localhost:3000/products', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify(newProduct),
   })
    .then (res => res.json())
    .then (newItem => {
      this.setState({
        current_user_products: [...this.state.current_user_products, newItem]
      }) 
    })

    this.newItemPublished()
  }


newItemPublished = () => {
  this.setState({
    newItemPublished: !this.state.newItemPublished
  })
}

grabUserObj = (obj) => {
  this.setState({
    selectUserProduct: obj
  })
}

 

 render() {
  return(
   <div className = "login">

     <Switch>

    <Route path = "/useritem">
      <UserItem></UserItem>
    </Route>

    <Route path = "/sell">
      <SellNew token = {this.state.token} newProduct = {this.createNewProduct} newItemPublished = {this.newItemPublished}
      newItemDisplay = {this.state.newItemPublished}></SellNew>
    </Route>

   
  
    <Route path = "/userpage">
      <UserPage token = {this.state.token} userProducts = {this.state.current_user_products} 
      grabUserObj= {this.grabUserObj} currentUser = {this.state.current_user}></UserPage>
    </Route>

     <Route path = "/main">
        <MainMarket token = {this.state.token} products = {this.state.all_products}/>
     </Route>

     <Route path = "/nononono">
       <FixedHeader token = {this.state.token}></FixedHeader>
     </Route>

     <Route path = "/">
        <Home getSeller = {this.getSeller} token= {this.state.token} currentUser = {this.state.current_user}></Home>
     </Route>
        

     </Switch>
   </div>
    )
   }
 }







