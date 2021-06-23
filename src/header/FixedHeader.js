import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'
import './header.css'



export default class FixedHeader extends Component {
 state = {}
 render() {
  return(
   <div>
       <nav>
         <label className = "logo">Vintage Hoops</label>
         <ul>
           <li><a className = "active" href="#">Home</a></li>
           <li><a href="#">Sell New Item</a></li>
           <li><a href="#">Checkout</a></li>
         </ul>
       </nav>
   </div>
    )
   }
 }


