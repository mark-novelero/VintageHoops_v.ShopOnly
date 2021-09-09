import './mainmarket.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Productcards extends Component {
 
 render() {

  return(

   <div className = "card" onMouseOver = {() => this.props.grabMarketItem(this.props.product)}>
      <Link to = "/marketitem"> 
      <img className = "market_photo" src={this.props.product.image}></img>
      </Link>
      <div className = "underline"></div>
      <h3 className = "product_title">{this.props.product.title}</h3>
      <p className = "price-card">${this.props.product.price}</p>
   </div>
   )
 } 
}

export default Productcards



