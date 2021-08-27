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
   all_products: [ {
    id: 1,
    title: "Phil Jackson Rookie Card 1972 PSA 9", 
    product_type: "Memorabilia", 
    team: "Bulls", 
    image: "https://i.imgur.com/JWzJ70hl.png?1", 
    desc: "The G.O.A.T Coach!!! ",
    size: "na" ,
    price: 100
}, 
{ 
id: 2,  
title:  "Michael Jordan Jumpman Card - Signed!",
product_type: "Memorabilia", 
team:  "Bulls",
image: "https://i.imgur.com/0tLdRcDl.png",
desc: "Mint and no damage to the card.", 
size: "NA", 
price: 575
},
{
id: 3,    
title:  "Classic Vince Carter Raptors Jersey 1997",
product_type: "Jerseys", 
team:  "Raptors",
image: "https://i.imgur.com/G2Zp35xl.png",
desc: "Throwback Vinsanity Jersey to freshen up your style!", 
size: "Large", 
price: 350
},
{
id: 5,   
title:  "Wilt Chamberlian Lakers Jersey 1970",
product_type: "Jerseys", 
team:  "Lakers",
image: "https://i.imgur.com/V6aDHdUl.png",
desc: "The jersey with all the memories! Must have for any Lakers fan", 
size: "S", 
price: 250
},
{
id: 6, 
title:  "Baron Davis We Believe Jersey Special Edition",
product_type: "Jerseys", 
team:  "Warriors",
image: "https://i.imgur.com/7ayio30l.png",
desc: "Vintage Home Jersey!", 
size: "M", 
price: 250
},

{
id: 7,  
title:  "Larry Bird Framed Autographed Jersey with PSA COA",
product_type: "Memorabilia", 
team:  "Celtics",
image: "https://i.imgur.com/C7RUxj1l.png",
desc: "Autograph has been authenticated by the best - PSA! So shop with confidence!", 
size: "NA", 
price: 500
},
{
id: 8,  
title: "James Harden Future Natural Solar Yellow" , 
product_type: "Sneakers" , 
team: "Rockets", 
image: "https://i.imgur.com/q9Brmmol.png", 
desc: "The ultimate kicks!",
size: "9.5", 
price: 150
},
{
id: 9,  
title:  "Lebron James Christmas Edition Sneakers - Foamposite",
product_type: "Sneakers", 
team:  "Heat",
image: "https://i.imgur.com/eG5hZpDl.png",
desc: "One of the best Lebron colorways to ever drop! Must have! ", 
size: "9", 
price: 450
},

{    
id: 10,  
title:  "Spud Webb Limited Edition Hawks Jersey",
product_type: "Jerseys", 
team:  "Hawks",
image: "https://i.imgur.com/S23XnB8l.png",
desc: "The jersey with all the memories! Must have for any Hawks fan", 
size: "S", 
price: 250
},
{ 
id: 11,  
title:  "Larry Bird Converse Classic Signed with C.O.A",
product_type: "Memorabilia", 
team:  "celtics",
image: "https://i.imgur.com/hnur5i2l.png",
desc: "This is a very rare item! The box is in great condition!", 
size: "S", 
price: 300

},
{
id: 12,
title:  "Kobe Bryant Limited Edition Lakers Jersey",
product_type: "Jerseys", 
team: "Lakers" ,
image: "https://i.imgur.com/A9tbq5cl.png",
desc: "Lakers", 
size: "M", 
price: 300
},
{ 
id: 13,  
title:  "Nike Kobe Bryant Elite 9 with tags",
product_type: "Sneakers", 
team:  "Lakers",
image: "https://i.imgur.com/RJmC7bFl.png",
desc: "One of the craziest colorways to release as a Kobe signature shoe. Make it yours today!" , 
size: "10", 
price: 400
},
{
id: 14,
title: "The Human Highlight Jersey - Dominique Wilkins!" , 
product_type: "Jersey" , 
team: "Hawks", 
image: "https://i.imgur.com/ammkzLnl.png", 
desc: "Limited Edition",
size: "L", 
price: 170
},
{   
id: 15,
title: "Nike Air Jordan Special Edition Eminem 313" , 
product_type: "Sneakers" , 
team: "Suns", 
image: "https://i.imgur.com/qabJ4Iyl.png", 
desc: "Nike Air Max CB 94 CZ7871-001, mint",
size: "9.5", 
price: 530
},  
{
id: 16,
title: "Kevin Garnett Signed Card - Mint 33/50!" , 
product_type: "Memorabilia" , 
team: "Bulls", 
image: "https://i.imgur.com/HfwPa71l.png", 
desc: "Limited Edition 20/25",
size: "na", 
price: 300
},
{ 
id: 17,
title:  "Nike Kobe 9 Elite Green Mambas Limited Edition",
product_type: "Sneakers", 
team:  "Lakers",
image: "https://i.imgur.com/ckNaWFel.png",
desc:  "Kobe 9 Elite", 
size: "10", 
price: 1000
},
{ 
id: 18,
title:  "Shaquille O'Neal Orlando Magic Jersey",
product_type: "Jerseys", 
team:  "Magic",
image: "https://i.imgur.com/wUcGhAhl.png",
desc: "The Shaq we all know started from this jersey! Make it yours today!", 
size: "XL", 
price: 225
},
{
id: 19,
title: "Moses Malone Authentic Jersey With Tags!", 
product_type: "Jersey" , 
team: "76ers", 
image: "https://i.imgur.com/EMEpUbOl.png", 
desc: "In mint condition!",
size: "NA", 
price: 200
},
{
id: 20,
title:  "The Dream Team Limited Edition Poster Mint",
product_type: "Memorabilia", 
team:  "Heat",
image: "https://i.imgur.com/Y1YDP8Ql.jpg",
desc: "The greatest team ever!", 
size: "M", 
price: 250
},
{
id: 21,
title: "Julius Erving Royal 1976-77 Hardwood Classics" , 
product_type: "Jersey" , 
team: "76ers", 
image: "https://i.imgur.com/AC8DmlXl.png", 
desc: "Men's Philadelphia 76ers Julius Erving Mitchell & Ness Royal 1976-77 Hardwood Classics Swingman player_id Jersey",
size: "Medium", 
price: 160
},
{
id: 22,
title: "Klay Thompson Special Edition Nike Jersey" , 
product_type: "Jerseys" , 
team: "Team USA", 
image: "https://i.imgur.com/Res4XsHl.png", 
desc: "Get this gem!!!!",
size: "Medium", 
price: 160
},
{
id: 23,
title: "Kevin Durant Seattle Sonics Jersey 2005", 
product_type: "Jerseys" , 
team: "Sonics", 
image: "https://i.imgur.com/AbjXrysl.png", 
desc: "Seattle Supersonics Kevin Durant Hardwood Classics Road Swingman Jersey By Mitchell and Ness",
size: "Large", 
price: 220
},
,
{ 
id: 4,  
title:  "Dikembe Mutombo Denver Nuggets Jersey 1988",
product_type: "Jerseys", 
team:  "Nuggets",
image: "https://i.imgur.com/OeqgK55l.png",
desc: "Finger wag with style with this mint and original Dikembe Mutombo Jersey.", 
size: "M", 
price: 250
},
{
id: 24,
title: "Kevin Garnett Nike The Ticket 2007" , 
product_type: "Sneakers" , 
team: "Timberwolves", 
image: "https://i.imgur.com/pQEvcdul.png", 
desc: "Kevin Garnett Nike The Ticket 2007, near mint with box.",
size: "9.5", 
price: 120
},
{
id: 25,
title: "94-95 Charles Barkley All Star Game Jersey" , 
product_type: "Jerseys" , 
team: "Suns", 
image: "https://i.imgur.com/ikchVmSl.png", 
desc: "94-95 Charles Barkley All Star Game Jersey, slightly worn, no stains.",
size: "Small", 
price: 110
},
{
id: 26,
title: "Stephen Curry Signed The City Jersey", 
product_type: "Memorabilia" , 
team: "Warriors", 
image: "https://i.imgur.com/Wpfxokbl.png", 
desc: "Stephen Curry Signed The City Jersey, with certificate of authenticity",
size: "Medium", 
price: 350
},
{
id: 27,
title: "James Harden Signed Rookie Card 88/100", 
product_type: "Memorabilia" , 
team: "OKC", 
image: "https://i.imgur.com/etzVyonl.png", 
desc: "In mint condition!",
size: "NA", 
price: 100
},
{   
id: 28,
title:  "SUPREME X AIR FOAMPOSITE ONE SP 'BLACK - Lil Penny",
product_type: "Sneakers", 
team:  "Bulls",
image: "https://i.imgur.com/NGZBeaOl.png",
desc: "Limited to 50!", 
size: "11", 
price: 1350
},
{
id: 29, 
title: "Nike Air More Uptempo Scottie Pippen" , 
product_type: "Sneakers" , 
team: "Bulls", 
image: "https://i.imgur.com/vdwIBoRl.png", 
desc: "Nike Air More Uptempo (Scottie Pippen) Black/White-Black Size 10, with box, mint",
size: "10", 
price: 150
},
{
id: 30,
title: "Dwyane Wade Autographed Framed Jersey" , 
product_type: "Memorabilia" , 
team: "Heat", 
image: "https://i.imgur.com/EQfdQ6zl.png", 
desc: "Dwyane Wade Autographed Miami Heat (Black #3) Deluxe Framed Jersey with court background, with certificate of authenticity",
size: "na",
price: 500 
},
{
id: 31,
title: "Dennis Rodman Signed 8 x 10 with C.O.A" , 
product_type: "Memorabilia" , 
team: "Bulls", 
image: "https://i.imgur.com/o0OeGaHl.png", 
desc: "Mint condition with certificate of authenticity",
size: "na", 
price: 250
},
{ 
id: 32,
title:  "Classic Scottie Pippen Bulls Swingman Jersey",
product_type: "Jerseys", 
team:  "Bulls",
image: "https://i.imgur.com/ASlGlSKl.png",
desc: "Throwback Vinsanity Jersey to freshen up your style!", 
size: "Large", 
price: 150
},
{
id: 33,
title: "Nike Air Zoom Flight 95 - Jason Kidd" , 
product_type: "Sneakers" , 
team: "Nets", 
image: "https://i.imgur.com/hGeVP0tl.png", 
desc: "A classic!",
size: "10", 
price: 150
}], 
   all_sellers: [], 
   currentSeller: [],
   currentUser: "", 
   current_user_products: [], 
   newItemPublished: false, 
   token: "false", 
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
   loggedOut: false
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

    if(localStorage.userToken === undefined){
      this.setState({
        token: "false"
      })
    } 
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

  const currentSeller = this.state.all_sellers.find(seller => seller.username === this.state.currentUser)
  const updatedSellerItems = this.state.current_user_products.filter(item => item.id !== obj.id)
  const updateAllProducts = this.state.all_products.filter(product => product.id !== obj.id)

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
    newuser: !this.state.newuser 
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
  window.localStorage.clear()
  window.location.reload();
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

    { this.state.loggedOut === true ? null : 
    <FixedHeader  token = {this.state.token} cartCount = {this.state.cartCount} resetSearchText = {this.resetSearchText}
                  changeTitlePage = {this.changeTitlePage} itemAdded = {this.state.itemAdded}
                  itemAddedFunc = {this.itemAddedFunc} currentUser = {this.state.currentUser}
                  logOut = {this.logOut}>
    </FixedHeader> }

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







