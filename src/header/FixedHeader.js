import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'
import './header.css'
import {Link} from 'react-router-dom'



export default class FixedHeader extends Component {
 state = {}
 render() {
  return(
   <div>
       <nav>
         <label className = "logo">Vintage Hoops</label>
         <ul>
           <Link to = "/main"><li><a className = "active" href="#">Vintage Market</a></li></Link>
           <Link to= "/sell"><li><a href="#">Sell</a></li></Link>
           {this.props.token === true ? <Link to = "/userpage"><li><a className = "active" href="#">User Page</a></li></Link>: null}
           <li><a href="#">Checkout</a></li>
         </ul>
       </nav>
   </div>
    )
   }
 }


