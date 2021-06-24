import "./userpage.css"
import React from 'react'



const UserPageCard = (props) => {
  return(
    <div>
        <h3>{props.product.title}</h3>
        <img className = "user_photo" src = {props.product.image}></img>
    </div>
   )

 }

export default UserPageCard