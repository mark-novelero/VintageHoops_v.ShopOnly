import React, { Component } from 'react'
import './header.css'
import {Link} from 'react-router-dom'




export default class FixedHeader extends Component {
 
 render() {

  return(
   <div className = "header">
      <nav>
        
        { this.props.token === "false" ? <Link to= "/"><label onClick = {() => this.props.resetSearchText()} className = "logo">Vintage Hoops</label></Link> 
        : <Link to= "/logout"><label className = "logo" onClick = {() => this.props.logOut()}>
          <a  className = "logout">{this.props.currentUser} Logout</a></label></Link> }

         <ul>
           <Link to = "/main"><li><a onClick = {() => {this.props.itemAddedFunc()}}  className = "active" href="#">Vintage Market</a></li></Link>
           
           {this.props.token == "true" ? <Link to= "/sell"><li><a href="#">Create Listing</a></li></Link> 
           : 
           null
           }

           {this.props.token == "true" ? <Link to = "/userpage"><li><a className = "active" href="#">User Page</a></li></Link>: null}
           <Link to = "/cart"><li><a href="#">Basket {this.props.cartCount}</a></li></Link>
         </ul>
      </nav>
   </div>
    )
   }
 }


