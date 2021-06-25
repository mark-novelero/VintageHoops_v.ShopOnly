import React, { Component } from 'react'
import CartCard from './CartCard'
import {  Segment, Grid, Divider } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'


class CartHolder extends Component {
 state = {}
 render() {
  return(
   
   <div>
       <FixedHeader></FixedHeader>
       <br></br>
       <br></br>
       {this.props.cartItems.map(product => <CartCard cartItem = {product}/>)} 
       <br></br>
   </div>
    )
   }
 }



export default CartHolder