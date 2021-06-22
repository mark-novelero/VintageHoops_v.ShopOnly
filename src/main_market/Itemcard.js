import React from 'react'
import './mainmarket.css'



const Itemcard = (props) => {
  return(
    <div className ="marketgrid">
      <br></br>
      <h2>{props.item.title}</h2>
      <img className = "market_photo" src = {props.item.image}></img>
      <br></br>
      <h3>{props.item.price}</h3>
    </div>
   )

 }

export default Itemcard