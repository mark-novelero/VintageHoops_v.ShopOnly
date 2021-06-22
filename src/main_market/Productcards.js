
import React, { Component } from 'react'
import Itemcard from './Itemcard'
import './mainmarket.css'




class Productcards extends Component {
 state = {}
 render() {
  return(
   <div>{this.props.product.map(items => <Itemcard item = {items}/>)}</div>
    )
   }
 }



export default Productcards