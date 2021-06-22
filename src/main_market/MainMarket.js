 
 import React, { Component } from 'react'
import Productcards from './Productcards'
import './mainmarket.css'
import Header from '../header/Header'
 
 
 
 
 export default class MainMarket extends Component {

  
 
  render() {
   return(
     
    <div >
      <Header></Header>
      <br></br>
      <br></br>
      {this.props.products.map(product=> <Productcards product= {product.products}/>)}</div>
     )
    }
  }
 
 
 
 