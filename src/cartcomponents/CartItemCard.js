import React from 'react'
import './cart.css'


 const CartItemCard = (props) => {
  
  return(
  
    <div className = "checkout-summary-div">
        <img className = "checkout-img" src = {props.cartItem.image}/>
        <div className = "title-div">
            <h4 className = "checkout-product-title">{props.cartItem.title}</h4>
        </div>
        <h4 className = "price">${props.cartItem.price}</h4>
    </div>
   )
 }

export default CartItemCard