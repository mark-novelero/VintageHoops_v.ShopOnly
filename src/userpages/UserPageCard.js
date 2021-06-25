import "./userpage.css"
import React from 'react'
import {Link} from 'react-router-dom'




const UserPageCard = (props) => {
  return(
    <div className = "card" onMouseOver = {() => props.grabUserObj(props.product)}>
        <img className = "user_photo" src = {props.product.image}></img>
        <h4>{props.product.title}</h4>
        <Link to = "/useritem"><p><button>Manage Listing</button></p></Link>
    </div>
   )
 }

export default UserPageCard