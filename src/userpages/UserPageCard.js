import "./userpage.css"
import React from 'react'



const UserPageCard = (props) => {
  return(
    <div className = "card" onMouseOver = {() => props.grabUserObj(props.product)}>
        <img className = "user_photo" src = {props.product.image}></img>
        <h4>{props.product.title}</h4>
        <p><button>Manage Listing</button></p>
    </div>
   )
 }

export default UserPageCard