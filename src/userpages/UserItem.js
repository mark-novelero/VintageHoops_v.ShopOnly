import React from 'react'
import { Image, Segment, Grid, Divider, Button } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'
import {Link} from 'react-router-dom'

const UserItem = (props) => {
  return(
    <div>
        <FixedHeader token = {props.token} cartCount = {props.cartCount}></FixedHeader>
        <br></br>
        <br></br>
        
    <Segment>
    <Grid columns={2} relaxed='very'>
      {props.deleted === false ? <Grid.Column>
        <p>
          <Image src={props.selectUserProduct.image} />
        </p>
      </Grid.Column> : <Grid.Column>
        <Link to = "/userpage"><Button onClick = {() => props.deleteState()} size = "large" centered color = "blue">Home Page</Button></Link></Grid.Column>}
        {props.deleted === false ? <Grid.Column>
        <br></br>
        <br></br> 
        <br></br>
        <br></br> 
        <p>
            <h1>{props.selectUserProduct.title}</h1>
        </p>
        <br></br>
        <p>
            <h2>${props.selectUserProduct.price}</h2>
        </p>
        <br></br>
        <br></br>
        <p>
            <h3 className = "addtional info">Additional Information</h3>
            <p>{props.selectUserProduct.desc}</p>
        </p>
        <br></br>
        <br></br>
        <Segment>
        
        <Button onClick = {() => props.eraser(props.selectUserProduct)} size = "large">Delete Listing</Button>
        </Segment>
      </Grid.Column> : <Grid.Column><h1>Deleted!</h1></Grid.Column>}
    </Grid>

    <Divider vertical></Divider>
  </Segment>
    </div>
   )
 }

export default UserItem 