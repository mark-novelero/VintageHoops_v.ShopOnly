import './App.css';
import Home from "./Home"
import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import MainMarket from './main_market/MainMarket';
import UserPage from './userpages/UserPage';
import SellNew from './SellNew';
import FixedHeader from './header/FixedHeader';
import UserItem from './userpages/UserItem';
import MarketItemCard from './main_market/MarketItemCard';
import CartHolder from './cartcomponents/CartHolder';
import NewUser from './userpages/NewUser';
import UpdateForm from './userpages/UpdateForm';
import PaymentForm from './cartcomponents/PaymentForm';
import ScrollToTop from './header/ScrollToTop';



export default class App extends Component {
 

  state = {
   all_players: [], 
   all_products: [], 
   all_sellers: [], 
   currentSeller: [],
   currentUser: "", 
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
   newuser: false, 
   titlePage: true,
   radioButtonOn: false, 
   searchText: "", 
   loginError: null, 
  }



componentWillMount(){
    localStorage.getItem('sellerProducts') && this.setState({
      current_user_products: JSON.parse(localStorage.getItem('sellerProducts'))})

    localStorage.getItem('currentUser') && this.setState({
      currentUser: localStorage.currentUser
    }) 
    localStorage.getItem('homePage') && this.setState({
      titlePage: localStorage.homePage
    })

    localStorage.getItem('userToken') && this.setState({
      token: localStorage.userToken
    })
  }  



componentDidMount(){

  window.scrollTo(0, 0)

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
       this.setState({
         all_sellers: sellers
        }
    ))

} 



componentWillUpdate(nextProps, nextState){
  localStorage.setItem('sellerProducts', JSON.stringify(nextState.current_user_products))
  localStorage.setItem('currentUser', this.state.currentUser)
  localStorage.setItem('homePage', this.state.titlePage)
  localStorage.setItem('userToken', this.state.token)
}



getSeller = (sellerObj) =>{
  
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
    .then (res => {
      if(res.ok !== true){
        throw Error("wrong username or password")
      }
      return res.json();
    })
    .then (userInfo => {
      localStorage.token = userInfo.token
      this.setState({
        loginError: null,
        userToken: userInfo.token
      })
      this.localToken(sellerObj)
      this.getUserProducts()  
    })
    .catch(err => {
      this.setState({
        loginError: "wrong username or password"
      })
    })

}



localToken =(obj)=>{

  if (localStorage.token !== "undefined"){
    this.setState({
      currentUser: obj.username,
      token: "true" 
    })
  } else {
    this.setState({
      currentUser: "", 
      token: false
    })
  }

  const sellerNow = this.state.all_sellers.find(seller => seller.username=== this.state.currentUser)
  this.setState({
    currentSeller: sellerNow
  })
}



createNewProduct =(obj)=> {

  const currentSeller = this.state.all_sellers.find(seller => seller.username===this.state.currentUser)

  const newProduct = {
    seller_id: currentSeller.id,
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


updateProduct =(obj)=> {

  const currentSeller = this.state.all_sellers.find(seller => seller.username===this.state.currentUser)
  const updatedSellerItems = this.state.current_user_products.filter(item => item.id != obj.id)
  const updateAllProducts = this.state.all_products.filter(product => product.id != obj.id)

  const updatedProduct = {
    seller_id: currentSeller.id,
    title: obj.title,
    product_type: obj.product_type,
    team: obj.team,
    image: obj.image,
    desc: obj.desc,
    size: obj.size,
    price: obj.price
  }

  fetch(`http://localhost:3000/products/${obj.id}`, {
    method: "PATCH",
    headers: {
     "Content-Type": "application/json",
   },
    body: JSON.stringify(updatedProduct),
   })
    .then (res => res.json())
    .then (newItem => {
     this.setState({
      selectUserProduct: newItem, 
      current_user_products: [...updatedSellerItems, newItem], 
      all_products: [...updateAllProducts, obj]
     })
    })

    this.newItemPublished()
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
   radioButtonOn: !this.radioButtonOn,
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
    itemAdded: false
  }) 
}



newUserCreation = (obj) => {
  
  const newUser = {
    username: obj.username,
    password: obj.password 
  }

  fetch('http://localhost:3000/sellers', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
     credentials: 'include'
   },
      body: JSON.stringify(newUser),
   })
    .then (res => res.json())
    .then (newSeller => {
      this.setState({
        all_sellers: [...this.state.all_sellers, newSeller], 
        newuser: !this.state.newuser
      }) 
   })
}



changeTitlePage = () => {
  this.setState({
    titlePage: !this.state.titlePage,  
  })
}



removeCartItem = (obj) => {
  const updatedCartItems = this.state.cartItems.filter(product=> product.id !== obj.id)
  this.setState({
    cartItems: updatedCartItems, 
    cartCount: this.state.cartCount - 1,
    cartSum: this.state.cartSum - obj.price,
    all_products: [...this.state.all_products, obj]
  })
}



getUserProducts = () => {
  const userProducts = this.state.all_products.filter(products => products.seller_id === this.state.currentSeller.id)
  
  this.setState({
    current_user_products: userProducts
  })
}



getSearchText = (e) => {
  this.setState({
    searchText: e.target.value 
  })
}



resetSearchText = () => {
  this.setState({
    searchText: "",
    filter: "all"
  })
}



logOut = () => {
  this.setState({
    token: !this.state.token, 
    cartCount: 0, 
    cartItems: [], 
    itemAdded: false
  })
}



render() {

  let updateProducts = []

  if(this.state.filter === "all"){
   updateProducts = this.state.all_products
  }else{
   updateProducts = this.state.all_products.filter(product => product.product_type === this.state.filter)
  }

  const filteredAllProducts = this.state.all_products.filter(product => product.title.toLowerCase().includes(this.state.searchText.toLowerCase()))


  
  return(
    
   <div className = "login">
     
    <FixedHeader token = {this.state.token} cartCount = {this.state.cartCount} 
     changeTitlePage = {this.changeTitlePage} itemAdded = {this.state.itemAdded}
     itemAddedFunc = {this.itemAddedFunc} currentUser = {this.state.currentUser}
     logOut = {this.logOut}>
    </FixedHeader>

    <ScrollToTop scrollStepInPx= "50" delayInMs= "8"></ScrollToTop>

    <Switch>

    <Route path = "/payment">
      <PaymentForm cartSum = {this.state.cartSum} cartItems = {this.state.cartItems}></PaymentForm>   
    </Route> 

    <Route path = "/updateform">
      <UpdateForm token = {this.state.token} newItemDisplay = {this.state.newItemPublished}
                  selectUserProduct = {this.state.selectUserProduct} updateProduct = {this.updateProduct}
                  currentSeller = {this.state.currentSeller} newItemPublished = {this.newItemPublished}>
      </UpdateForm>
    </Route>

    <Route path = "/newuser">
      <NewUser newUserCreation = {this.newUserCreation} newUser = {this.state.newuser} 
               changeTitlePage = {this.changeTitlePage}>
      </NewUser>
    </Route>

    <Route path = "/cart">
      <CartHolder cartItems = {this.state.cartItems} cartCount = {this.state.cartCount}
                  cartSum = {this.state.cartSum} token = {this.state.token} removeCartItem = {this.removeCartItem}>
      </CartHolder>
    </Route>

    <Route path = "/marketitem">
      <MarketItemCard selectMarketItem = {this.state.selectMarketItem} token = {this.state.token}
                      addItemToCart = {this.addItemToCart} cartCount = {this.state.cartCount}
                      itemAdded = {this.state.itemAdded} itemAddedFunc = {this.itemAddedFunc} deleteStateDisplay = {this.deleteStateDisplay}
                      cartCount = {this.state.cartCount} >
      </MarketItemCard>
    </Route>

    <Route path = "/useritem">
      <UserItem eraser = {this.eraser} selectUserProduct = {this.state.selectUserProduct} token = {this.state.token}
                deleteState = {this.deleteStateDisplay} deleted = {this.state.deleted} cartCount = {this.state.cartCount}>
      </UserItem> 
    </Route>

    <Route path = "/sell">
      <SellNew token = {this.state.token} newProduct = {this.createNewProduct} newItemPublished = {this.newItemPublished}
               newItemDisplay = {this.state.newItemPublished} cartCount = {this.state.cartCount} currentSeller = {this.state.currentSeller}>
      </SellNew>
    </Route>
  
    <Route path = "/userpage">
      <UserPage token = {this.state.token} userProducts = {this.state.current_user_products} selectUserProduct = {this.state.selectUserProduct}
                grabUserObj= {this.grabUserObj} currentUser = {this.state.currentUser} cartCount = {this.state.cartCount}>
      </UserPage>
    </Route>

    <Route path = "/main">
      <MainMarket radioButtonOn = {this.state.radioButtonOn} grabMarketItem = {this.grabMarketItem} token = {this.state.token} 
                  searchFilteredProducts = {filteredAllProducts} sortProducts = {this.sortProducts} filterProducts = {this.filterProducts} 
                  updateProducts = {updateProducts} cartCount = {this.state.cartCount} getSearchText = {this.getSearchText} 
                  searchText = {this.state.searchText} resetSearchText = {this.resetSearchText}>
      </MainMarket>
    </Route>
    
    <Route path = "/">
      <Home getSeller = {this.getSeller} token= {this.state.token} currentUser = {this.state.currentUser}
            changeTitlePage = {this.changeTitlePage} titlePage = {this.state.titlePage}
            loginError = {this.state.loginError} setLocalStorageData = {this.setLocalStorageData}
            getLocalStorageData = {this.getLocalStorageData} userToken = {this.state.userToken}>
      </Home>
    </Route>
        
    </Switch>
   </div>
    )
   }
 }







