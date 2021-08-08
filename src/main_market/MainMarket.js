import React, { Component } from 'react'
import Productcards from './Productcards'
import './mainmarket.css'


export default class MainMarket extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {  
   return(
    
    <div className = "top-market-page"> 
      <div className = "vintage-market-title">
        <h2 className = "vintage-market-title">Vintage Market</h2>
      </div>
      <div className = "border-top"></div>
      <div className = "sort-page"> 
        <label className = "radio-button">
          <input placeholder = "search" className = "seach-text"
                onChange = {(e) => this.props.getSearchText(e)} ></input>
          <input type="radio" value="Price" name = "sort-price"
            checked={this.props.radioButtonOn === "true" ? true : null} 
            onClick={(e) => this.props.sortProducts(e.target.value)}/>  
        </label>
        <strong className = "s1">Sort By Price</strong>
        <label>
          <strong className = "s2">Filter</strong>
          <select onChange={(e) => this.props.filterProducts(e.target.value)}>
            <option value="NA">--</option>
            <option value="all">All</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Jerseys">Jerseys</option>
            <option value="Memorabilia">Memorabilia</option>
          </select>
        </label>
      </div>
    <br></br>
    <br></br>
    {this.props.searchText === "" ?
      <div className = "market_grid">
        {this.props.updateProducts.map((product) => (
          <Productcards grabMarketItem= {this.props.grabMarketItem} product= {product} key= {product.id}
                        resetSearchText = {this.props.resetSearchText}/>
      ))} 
    </div> 
    : 
    <div className = "market_grid">
      {this.props.searchFilteredProducts.map((product) => (
        <Productcards grabMarketItem= {this.props.grabMarketItem} product= {product} key= {product.id}
                      resetSearchText = {this.props.resetSearchText}/>
      ))} 
    </div>}
    <br></br>
    <br></br>
    <div className = "border-bottom"></div>
    <br></br>
   </div>
    )
  }
}
 
 
 
 