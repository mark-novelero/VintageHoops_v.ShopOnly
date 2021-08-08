import './mainmarket.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Productcards extends Component {
 state = {}
 render() {
  return(
   <div className = "card" onMouseOver = {() => this.props.grabMarketItem(this.props.product)}>
     <img className = "market_photo" src={this.props.product.image}></img>
     <h3 className = "product_title">{this.props.product.title}</h3>
     <p className = "price">${this.props.product.price}</p>
     <Link to = "/marketitem"> <button onClick = {() => {this.props.resetSearchText()}} className = "button_market">See Product Details</button></Link>
   </div>
    )
   }
 }



export default Productcards



