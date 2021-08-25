import React, { Component } from 'react'
import {  Segment, Button, Grid } from "semantic-ui-react"
import './cart.css'
import {Link} from 'react-router-dom'



class CartHolder extends Component {
 
 render() {
  
  return(
   
   <div>
    { this.props.cartCount === 0 ? 
      <div className = "div-cart-image">
        <h1 className = "empty"> Your cart is empty.</h1> 
        <div className = "border-top"></div>
        <img className = "mj" src= "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F09%2Fmichael-jordan-crying-face-meme-jeopardy-question-0.jpg?w=960&cbr=1&q=90&fit=max"></img>
      </div>
     : 
     <div className = "main-div">
      <h1 className = "your-basket">Basket</h1>
      { this.props.cartCount > 0 ?
        <Grid columns={1} relaxed = "very">
          <div className = "cart-item-div-top" >
            <Button color = "red" size = "mini" className = "remove-btn" onClick = {() => {this.props.removeCartItem(this.props.cartItems[0])}}>X</Button>
            <Grid.Column>
              <div className = "cart-body"> 
                <img className = "cartimg" src={this.props.cartItems[0].image}></img>
                <h3 className = "cartitem">{this.props.cartItems[0].title}  </h3>
              </div>  
            </Grid.Column> 
          </div>
        </Grid>  : null } 
    
      { this.props.cartCount > 1 ? 
        <Grid columns={1} relaxed = "very">
          <div className = "cart-item-div">
            <Button color = "red" size = "mini" className = "remove-btn" onClick = {() => {this.props.removeCartItem(this.props.cartItems[1])}}>X</Button>
            <Grid.Column>
              <div className = "cart-body"> 
                <img className = "cartimg" src={this.props.cartItems[1].image} />
                <h3 className = "cartitem">{this.props.cartItems[1].title}  </h3>
              </div> 
            </Grid.Column>
          </div>
        </Grid> : null }
    
      { this.props.cartCount > 2 ? 
        <Grid columns={1} relaxed = "very">
          <div className = "cart-item-div">
            <Button color = "red" size = "mini" className = "remove-btn" onClick = {() => {this.props.removeCartItem(this.props.cartItems[2])}}>X</Button>
            <Grid.Column>
              <div className = "cart-body"> 
                <img className = "cartimg" src={this.props.cartItems[2].image} />
                <h3 className = "cartitem">{this.props.cartItems[2].title}  </h3>
              </div> 
            </Grid.Column>
          </div>
        </Grid> : null }

      { this.props.cartCount > 3 ? 
        <Grid columns={1} relaxed = "very">
          <div className = "cart-item-div">
            <Button color = "red" size = "mini" className = "remove-btn" onClick = {() => {this.props.removeCartItem(this.props.cartItems[3])}}>X</Button>
            <Grid.Column>
              <div className = "cart-body"> 
                <img className = "cartimg" src={this.props.cartItems[3].image} />
                <h3 className = "cartitem">{this.props.cartItems[3].title}  </h3>
              </div> 
            </Grid.Column>
          </div>
        </Grid> : null }
  
      { this.props.cartCount > 4 ? 
        <Grid columns={1} relaxed = "very">
          <div className = "cart-item-div">
            <Button color = "red" size = "mini" className = "remove-btn" onClick = {() => {this.props.removeCartItem(this.props.cartItems[3])}}>X</Button>
            <Grid.Column>
              <div className = "cart-body"> 
                <img className = "cartimg" src={this.props.cartItems[4].image} />
                <h3 className = "cartitem">{this.props.cartItems[4].title}  </h3>
              </div> 
            </Grid.Column>
          </div>
        </Grid> : null }  
      </div> }

      <Segment>

        { this.props.cartCount === 0 ? 
          <Link to = "/main"><Button size = "large" color = "black">Back</Button></Link> 
          : 
          <div><h1 className = "cart-total">Subtotal ${this.props.cartSum}</h1>
          <Link to = "/payment"><Button size = "medium" color = "black">Payment</Button></Link>
          </div> }

      </Segment>
      <br></br>
   </div>
    )
  }
}

export default CartHolder