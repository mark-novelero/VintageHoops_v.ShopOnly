import React, { Component } from 'react'
import CartCard from './CartCard'
import {  Segment, Grid, Divider, Image } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'
import './cart.css'


class CartHolder extends Component {
 state = {}
 render() {
  return(
   
   <div>
       <FixedHeader token = {this.props.token} cartCount = {this.props.cartCount}></FixedHeader>
       <br></br>
       <br></br>
       <h1>Cart Total {this.props.cartSum}</h1>
       <br></br>
    {this.props.cartCount === 0 ? <div><h1> Your cart is empty.</h1> 
    <img src= "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F09%2Fmichael-jordan-crying-face-meme-jeopardy-question-0.jpg?w=960&cbr=1&q=90&fit=max"></img></div>
     : <Segment className = "cart" >
         
    <Grid columns={1} relaxed='very' className ="content" >
        
        {this.props.cartCount > 0 ?<Grid.Column centers>
          <Image className = "cartimg" src={this.props.cartItems[0].image} />
          <h3 className = "cartitem">{this.props.cartItems[0].title}  </h3>
        
      </Grid.Column>: null}

    <Grid columns={1}>
       {this.props.cartCount > 1 ?<Grid.Column>
         <p>
          <Image className = "cartimg" src={this.props.cartItems[1].image} />
          <h3 className = "cartitem">{this.props.cartItems[1].title}  </h3>
        </p>
      </Grid.Column>: null}
    </Grid>

    <Grid columns={1}>
       {this.props.cartCount > 2 ?<Grid.Column>
         <p>
          <Image className = "cartimg" src={this.props.cartItems[2].image} />
          <h3 className = "cartitem">{this.props.cartItems[2].title}  </h3>
        </p>
      </Grid.Column>: null}
    </Grid>

    <Grid columns={1}>
       {this.props.cartCount > 3 ?<Grid.Column>
         <p>
          <Image  src={this.props.cartItems[3].image} />
          <h3 >{this.props.cartItems[3].title}  </h3>
        </p>
      </Grid.Column>: null}
    </Grid>
    <Grid columns={1}>
       {this.props.cartCount > 4 ?<Grid.Column>
         <p>
          <Image  src={this.props.cartItems[4].image} />
          <h3 >{this.props.cartItems[4].title}  </h3>
        </p>
      </Grid.Column>: null}
    </Grid>

     
    </Grid>
  
  </Segment>}
  
   </div>
    )
   }
 }



export default CartHolder