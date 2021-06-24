import React from 'react'
import { Image, Segment, Grid, Divider, Button } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'

const UserItem = (props) => {
  return(
    <div>
        <FixedHeader></FixedHeader>
        <br></br>
        <br></br>
        
         <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src='https://dyn1.heritagestatic.com/lf?set=path%5B1%2F5%2F5%2F8%2F1558754%5D%2Csizedata%5B850x600%5D&call=url%5Bfile%3Aproduct.chain%5D' />
        </p>
       
      </Grid.Column>
      <Grid.Column>
        <br></br>
        <br></br> 
        <p>
            <h1>Dr. J Autograph Photo</h1>
        </p>
        <br></br>
        <p>
            <h3>$140</h3>
        </p>
        <br></br>
        <br></br>
        <p>
          <h3>This is a framed autograph photo of Dr. Julius Erving. The Product comes with a certificate of authenticity.</h3>
        </p>
        <br></br>
        <br></br>
        <Segment>
        <Button size = "large" color = "blue">Edit Listing</Button>
        <Button size = "large">Delete Listing</Button>
        
        </Segment>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
    </div>
   )
 }

export default UserItem 