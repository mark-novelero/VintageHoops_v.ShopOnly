import './mainmarket.css'
import React, { Component } from 'react'




class Productcards extends Component {
 state = {}
 render() {
  return(
   <div className = "card">
     <img className = "market_photo" src={this.props.product.image}></img>
     <h3>{this.props.product.title}</h3>
     <p className = "price">${this.props.product.price}</p>
     <p><button>Add to Cart</button></p>
   </div>
    )
   }
 }



export default Productcards



