import React, { Component } from 'react'
import './header.css'
import {Link} from 'react-router-dom'



export default class FixedHeader extends Component {
 state = {}
 render() {
  return(
   <div>
       <nav>
         <Link to= "/"><label className = "logo">Vintage Hoops</label></Link>
         <ul>
           <Link to = "/main"><li><a className = "active" href="#">Vintage Market</a></li></Link>
           {this.props.token === true ? <Link to= "/sell"><li><a href="#">Sell</a></li></Link> : <Link to = "/newuser"><li><a className = "active" href="#">Register</a></li></Link>}
           {this.props.token === true ? <Link to = "/userpage"><li><a className = "active" href="#">User Page</a></li></Link>: null}
           <Link to = "/cart"><li><a href="#">User Basket {this.props.cartCount}</a></li></Link>
           
         </ul>
       </nav>
   </div>
    )
   }
 }


