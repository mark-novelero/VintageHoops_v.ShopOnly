import React from 'react'
import { Image, Segment, Grid, Divider, Button } from "semantic-ui-react"



const CartCard = (props) => {
  return(
    <div>
        <h3>{props.cartItem.title} {props.cartItem.price}</h3>
    </div>
   )

 }

export default CartCard