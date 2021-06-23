
import React, { Component } from 'react'
import './mainmarket.css'




class Productcards extends Component {
 state = {}
 render() {
  return(
   <div >
     <br></br>
     <h3>{this.props.product.title}</h3>
     <h3>{this.props.product.price}</h3>
     <br></br>
     <img className = "market_photo" src={this.props.product.image}></img>
     <br></br>
    
     </div>
    )
   }
 }



export default Productcards