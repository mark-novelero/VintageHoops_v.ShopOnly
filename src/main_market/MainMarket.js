 
 import React, { Component } from 'react'
import Productcards from './Productcards'
import './mainmarket.css'
import FixedHeader from '../header/FixedHeader'
 
 
 //sort field just below header
 
 export default class MainMarket extends Component {

  
 
  render() {
   return(
     
    <div >
      <FixedHeader></FixedHeader>
      
      <br></br>
      <br></br>
      <br></br>
      <div className = "marketgrid">
      {this.props.products.map(product=> <Productcards product= {product}/>)}
      </div>
    </div>
     )
    }
  }
 
 
 
 