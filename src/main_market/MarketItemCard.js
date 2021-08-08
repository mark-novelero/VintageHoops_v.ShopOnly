import React from 'react'
import { Segment, Grid, Divider, Button } from "semantic-ui-react"
import {Link} from 'react-router-dom'



const MarketItemCard = (props) => {
  return(
    <div>
        {props.itemAdded === true ? <h1 className = "product-basket">Added to your basket!</h1> : null}
        <br></br>
        <Segment >
          <Grid columns={2} relaxed='very'>
            <Grid.Column  className = "item_details_grid">
              <div className = "product-img-div">
                <img className = "item-pic-detail" src={props.selectMarketItem.image} />
              </div>
             </Grid.Column> 
            <Grid.Column>
              <div className = "item-details-div">
                  <h1 className = "title-item-details">{props.selectMarketItem.title}</h1>
              </div>
              <div className = "price-div">
                  <h2>${props.selectMarketItem.price}</h2>
              </div>
              <br></br>
              <br></br>
              <div className = "info-div">
                  <h3 className = "additional_info">Additional Information</h3>
                  <p>{props.selectMarketItem.desc}</p>
              </div>
              <Segment>
                {props.itemAdded === false ? 
                    <Button onClick ={() => props.addItemToCart(props.selectMarketItem)} size = "medium" color = "blue">Add to cart</Button> 
                : 
                <div>
                    <Link to = "/main"><Button onClick = {() => props.itemAddedFunc()} size = "medium" color = "blue">SHOP</Button></Link>
                    <Link to = "/cart"><Button onClick = {() => props.itemAddedFunc()} size = "medium" color = "orange">CHECKOUT</Button></Link>
                </div>} 
                {props.itemAdded === false ? 
                    <Link to = "/main"> <Button size = "medium" color = "orange">Back</Button></Link> : null} 
                </Segment>
            </Grid.Column> 
          </Grid>
          <Divider vertical></Divider>
        </Segment>
        <br></br>
        <br></br>
    </div>
   )
 }

export default MarketItemCard