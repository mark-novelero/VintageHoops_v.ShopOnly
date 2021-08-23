import React from 'react'
import { Image, Segment, Grid, Divider, Button } from "semantic-ui-react"
import {Link} from 'react-router-dom'
import "./userpage.css"



const UserItem = (props) => {

  return(
    <div className = "user-listing-card">
      <Segment>
        <Grid columns={2} relaxed='very'>
          {props.deleted === false ? 
            <Grid.Column>
              <Image className = "user-item-img" src={props.selectUserProduct.image} />
            </Grid.Column> 
            : 
            <Grid.Column>
              <Link to = "/userpage"><Button onClick = {() => props.deleteState()} size = "large" 
                    centered color = "blue">Home Page</Button></Link>
            </Grid.Column>}
              
          {props.deleted === false ? 
            <Grid.Column>
                <div className = "user-item-desc">
                  <h1 className = "user-item-desc">{props.selectUserProduct.title}</h1>
                </div>
                <div >
                  <h2>${props.selectUserProduct.price}</h2>
                </div>
                <div className = "body-card">
                  <h3 className = "additional-info">Additional Information</h3>
                  <p>{props.selectUserProduct.desc}</p>
                </div>
              <Segment>
                <Button onClick = {() => props.eraser(props.selectUserProduct)} size = "large">Delete Listing</Button>
                <Link to = "/updateform"><Button size = "large" color = "green">update</Button></Link>
              </Segment>
            </Grid.Column> 
            : 
            <Grid.Column>
              <h1>Deleted!</h1>
            </Grid.Column>}   
        </Grid>
        <Divider vertical></Divider>
        <br></br>
        <br></br>
      </Segment>
    </div>
  )
}

export default UserItem 