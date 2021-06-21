
import React from 'react'
import './mainmarket.css'


const Productcards = (props) => {
  
   return(
    <div>
        <h4>{props.product.title}</h4>
        <img className = "market_photo" src = {props.product.image}></img>
    </div>
   )

 }

export default Productcards