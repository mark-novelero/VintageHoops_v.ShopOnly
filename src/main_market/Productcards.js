import './mainmarket.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Productcards extends Component {
 state = {}
 render() {
  return(
   <div className = "card" onMouseOver = {() => this.props.grabMarketItem(this.props.product)}>
     <img className = "market_photo" src={this.props.product.image}></img>
     <h3>{this.props.product.title}</h3>
     <p className = "price">${this.props.product.price}</p>
    <Link to = "/marketitem"> <p><button>See Product Details</button></p></Link>
   </div>
    )
   }
 }



export default Productcards



