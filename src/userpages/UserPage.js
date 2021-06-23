import React, { Component } from 'react'
import FixedHeader from '../header/FixedHeader'
import MainMarket from '../main_market/MainMarket'
import UserPageCard from './UserPageCard'


class UserPage extends Component {
 state = {}
 render() {
  return(
   <div>
       <FixedHeader></FixedHeader>
       <br></br>
       <br></br>
       <h2>Davion's Items</h2>
       {this.props.userProducts.map(product => <UserPageCard product = {product}/>)}
       <br></br>
       <br></br>
       <br></br>
       <h2>Vintage Hoops Store</h2>
       <br></br>
       
   </div>
    )
   }
 }



export default UserPage