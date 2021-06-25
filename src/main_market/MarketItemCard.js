import { ThreeSixty } from '@material-ui/icons'
import React from 'react'
import { Image, Segment, Grid, Divider, Button } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'
import {Link} from 'react-router-dom'


const MarketItemCard = (props) => {
  return(
    <div>
        <FixedHeader token = {props.token} cartCount = {props.cartCount}></FixedHeader>
        <br></br>
        <br></br>
        
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src={props.selectMarketItem.image} />
        </p>
      </Grid.Column> 
    <Grid.Column>
        <br></br>
        <br></br> 
        <br></br>
        <br></br> 
        <p>
            <h1>{props.selectMarketItem.title}</h1>
        </p>
        <br></br>
        <p>
            <h2>{props.selectMarketItem.price}</h2>
        </p>
        <br></br>
        <br></br>
        <p>
            <h3 className = "addtional info">Additional Information</h3>
            <p>{props.selectMarketItem.desc}</p>
        </p>
        <br></br>
        <br></br>
        <Segment>
        {props.itemAdded === true ? <h1>Added to your basket!</h1> : null}
        {props.itemAdded === false ? <Button onClick ={() => props.addItemToCart(props.selectMarketItem)} 
          size = "large" color = "blue">Add to cart</Button> : <Link to = "/main"><Button onClick = {() => props.itemAddedFunc()} 
          size = "large" color = "blue">Continue Shopping</Button></Link>} 
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