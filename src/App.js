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
import MarketItemCard from './main_market/MarketItemCard';
import CartHolder from './cartcomponents/CartHolder';
import NewUser from './userpages/NewUser';


export default class App extends Component {
 
  state = {
   all_players: [], 
   all_products: [], 
   all_sellers: [], 
   current_user: "", 
   current_user_products: [], 
   newItemPublished: false, 
   token: false, 
   selectMarketItem: {}, 
   selectUserProduct: {}, 
   cartItems: [],
   sort: "none", 
   filter: "all", 
   deleted: false, 
   cartCount: 0, 
   itemAdded: false, 
   cartSum: 0, 
   newuser: false
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
  const userProducts = this.state.all_products.filter(products => products.seller_id === currentSeller.id)
  
this.setState({
    current_user_products: userProducts
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
        current_user_products: [...this.state.current_user_products, newItem], 
        all_products: [...this.state.all_products, newItem]
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

grabMarketItem = (obj) => {
  this.setState({
    selectMarketItem: obj
  })
}

sortProducts = (sortType)=>{
  this.setState({
   sort: sortType,
   all_products: this.state.all_products.sort(
   (a,b) => sortType === "Price" ? a.price - b.price : a.name.localeCompare(b.name) )
  })
 }

filterProducts = (type) => {
  this.setState({
   filter: type
  })
 }
 
eraser = (obj) => {

  if(window.confirm('Are you sure?'))
  {
    fetch(`http://localhost:3000/products/${obj.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("Deleted"))
    }

    const updatedUserProducts = this.state.current_user_products.filter(product=> product.id !== obj.id)
    this.setState({
      current_user_products: updatedUserProducts
    })

    const updatedProducts = this.state.all_products.filter(product => product.id !== obj.id)
    this.setState({
      all_products: updatedProducts
    })

    this.deleteStateDisplay()    
  }

deleteStateDisplay = () => {
  this.setState({
    deleted: !this.state.deleted
  })
}

addItemToCart = (obj) => {
  
  const selectedItem = this.state.all_products.filter(product => product.id !== obj.id)

  this.setState({
    all_products: selectedItem, 
    cartItems: [...this.state.cartItems, obj], 
    cartCount: this.state.cartCount + 1, 
    itemAdded: !this.state.itemAdded, 
    cartSum: this.state.cartSum + obj.price
  })
}

itemAddedFunc = ()=> {
  this.setState({
    itemAdded: !this.state.itemAdded
  }) 
}

newUserCreation = (obj) => {
  
  const newUser = {
    username: obj.username,
    password: obj.password, 
    rating: 0
  }

  fetch('http://localhost:3000/sellers', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify(newUser),
   })
    .then (res => res.json())
    .then (newItem => {
      this.setState({
        all_sellers: [...this.state.all_sellers, newItem], 
        newuser: !this.state.newuser
      }) 
    })

}

 render() {

  let updateProducts = []
  if(this.state.filter === "all"){
   updateProducts = this.state.all_products
  }else{
   updateProducts = this.state.all_products.filter(product => product.product_type === this.state.filter)
  }

  return(
   <div className = "login">

    <Switch>

    <Route path = "/newuser">
      <NewUser newUserCreation = {this.newUserCreation} newUser = {this.state.newuser}></NewUser>
    </Route>

    <Route path = "/cart">
      <CartHolder cartItems = {this.state.cartItems} cartCount = {this.state.cartCount}
                  cartSum = {this.state.cartSum} token = {this.state.token}></CartHolder>
    </Route>

    <Route path = "/marketitem">
      <MarketItemCard selectMarketItem = {this.state.selectMarketItem} token = {this.state.token}
        addItemToCart = {this.addItemToCart} cartCount = {this.state.cartCount}
        itemAdded = {this.state.itemAdded} itemAddedFunc = {this.itemAddedFunc} deleteStateDisplay = {this.deleteStateDisplay}
        cartCount = {this.state.cartCount}></MarketItemCard>
    </Route>

    <Route path = "/useritem">
      <UserItem eraser = {this.eraser} selectUserProduct = {this.state.selectUserProduct} token = {this.state.token}
        deleteState = {this.deleteStateDisplay} deleted = {this.state.deleted} cartCount = {this.state.cartCount}></UserItem> 
    </Route>

    <Route path = "/sell">
      <SellNew token = {this.state.token} newProduct = {this.createNewProduct} newItemPublished = {this.newItemPublished}
      newItemDisplay = {this.state.newItemPublished} cartCount = {this.state.cartCount}></SellNew>
    </Route>
  
    <Route path = "/userpage">
      <UserPage token = {this.state.token} userProducts = {this.state.current_user_products} 
        grabUserObj= {this.grabUserObj} currentUser = {this.state.current_user} cartCount = {this.state.cartCount}></UserPage>
    </Route>

    <Route path = "/main">
      <MainMarket grabMarketItem = {this.grabMarketItem} token = {this.state.token} products = {this.state.all_products}
         sortProducts = {this.sortProducts} filterProducts = {this.filterProducts} updateProducts = {updateProducts}
         cartCount = {this.state.cartCount}/>
    </Route>

     <Route path = "/nononono">
       <FixedHeader token = {this.state.token} cartCount = {this.state.cartCount}></FixedHeader>
     </Route>

     <Route path = "/">
        <Home getSeller = {this.getSeller} token= {this.state.token} currentUser = {this.state.current_user}></Home>
     </Route>
        
     </Switch>
   </div>
    )
   }
 }







