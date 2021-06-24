import React, { Component } from 'react'
import FixedHeader from '../header/FixedHeader'
import MainMarket from '../main_market/MainMarket'
import UserPageCard from './UserPageCard'
import "./userpage.css"



class UserPage extends Component {
 state = {}
 render() {
  return(
   <div>
       <FixedHeader token = {this.props.token}></FixedHeader>
       <br></br>
       <br></br>
       <h2>{this.props.currentUser}'s items</h2>
       <br></br>
       <br></br>
       <div className = "usergrid">
       {this.props.userProducts.map(product => <UserPageCard grabUserObj = {this.props.grabUserObj} product = {product}/>)}
       <br></br>
       <br></br>
       <br></br>
       </div>
       <br></br>
       <br></br>
      <br></br>
      <br></br>
      <br></br>
   </div>
    )
   }
 }

export default UserPage