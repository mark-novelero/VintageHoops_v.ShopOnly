 
import React, { Component } from 'react'
import Productcards from './Productcards'
import './mainmarket.css'
import FixedHeader from '../header/FixedHeader'
import {Grid} from '@material-ui/core'
 
 
 //sort field just below header
 
 export default class MainMarket extends Component {

  

 

  render() {  
   return(
     
    <div>
      <FixedHeader token = {this.props.token} cartCount = {this.props.cartCount}></FixedHeader>
      <strong>Sort by:</strong>
      <label>
      <input type="radio" value="Price" 
          checked={this.props.sortedType === "Price" ? true : false} 
           onChange={(e) => this.props.sortProducts(e.target.value)}/>Price
      </label>
   <br/>
   <label>
    <strong>Filter:</strong>
    <select onChange={(e) => this.props.filterProducts(e.target.value)}>
     <option value="all">All</option>
     <option value="Sneakers">Sneakers</option>
     <option value="Jerseys">Jerseys</option>
     <option value="Memorabilia">Memorabilia</option>
    </select>
   </label>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container justify= "center" spacing= {4}>
          {this.props.updateProducts.map((product) => (
          <Grid xs= {30} sm= {6} md= {4} lg={3}>
          <Productcards grabMarketItem= {this.props.grabMarketItem} product= {product} key= {product.id}/>
      </Grid>
      ))}
      </Grid>
    </div>
     )
    }
  }
 
 
 
 