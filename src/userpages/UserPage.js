import React, { Component } from 'react'
import UserPageCard from './UserPageCard'
import "./userpage.css"


class UserPage extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0)
  }

 render() {
  return(
    <div >
      <div className = "user-title">
        <h2 className = "user-title">{this.props.currentUser}'s items</h2>
      </div>
      <div className = "user-title-border"></div>
       <div className = "usergrid">
          {this.props.userProducts.map(product => <UserPageCard selectUserProduct = {this.props.selectUserProduct} grabUserObj = {this.props.grabUserObj} product = {product}/>)}
       </div>
       <div className = "border-bottom"></div>
       <br></br>
    </div>
    )
   }
 }

export default UserPage