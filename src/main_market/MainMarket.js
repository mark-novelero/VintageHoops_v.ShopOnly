 
 import React, { Component } from 'react'
import Productcards from './Productcards'
import './mainmarket.css'
 
 
 
 
 export default class MainMarket extends Component {
 
  render() {
   return(
    <div className ="marketgrid">{this.props.products.map(product=> <Productcards product= {product}/>)}</div>
     )
    }
  }
 
 
 
 