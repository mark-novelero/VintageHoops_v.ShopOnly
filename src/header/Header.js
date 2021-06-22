import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'
import './header.css'



class Header extends Component {
 state = {}
 render() {
  return(
   <div>
       <nav>
         <label className = "logo">Vintage Hoops</label>
         <ul>
           <li><a className = "active" href="#">Home</a></li>
           <li><a href="#">Customer Service</a></li>
           <li><a href="#">Checkout</a></li>
         </ul>
       </nav>
   </div>
    )
   }
 }


Header.propTypes = {}
export default Header