import "./userpage.css"
import React from 'react'
import {Link} from 'react-router-dom'



const UserPageCard = (props) => {
  return(
    <div className = "user-card" onMouseOver = {() => props.grabUserObj(props.product)}>
        <img className = "user_photo" src = {props.product.image}></img>
        <div>
          <h4 className = "title-card">{props.product.title}</h4>
        </div>
        <Link to = "/useritem"><button onMouseOver = {() => props.grabUserObj(props.product)} className = "manage-listing-button">Manage Listing</button></Link>   
    </div>
   )
 }

export default UserPageCard