import React, { Component } from 'react'
import { Form, Segment, Button } from "semantic-ui-react"
import FixedHeader from './header/FixedHeader'
import { ParallaxProvider } from "react-scroll-parallax"
import Parallaximg from './Parallaximg'





export default class SellNew extends Component {
 state = {
     size: "", 
     desc: "", 
     seller_id: 12, 
     team: 'na',
     size: '', 
     price: 0, 
     title: "", 
     product_type: "" 
 }

handleSize = (e) =>{
    this.setState({
        size: e.target.value
    })
}

 render() {
  return(
   <ParallaxProvider>
    <FixedHeader></FixedHeader>
    <br></br>
    <br></br>
    <br></br>
    <Segment color = "gray" size = "small" inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Product Title' placeholder='Product Title' />
        <Form.Input fluid label='Image Url' placeholder='Image Url' />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field onChange = {(e) => this.handleSize(e)} label='An HTML <select>' control='select'>
        <option value='na'>NA</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
        <option value='XL'>Extra Large</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </Form.Field>
      <Form.Field label='Product Type' control='select'>
        <option value='small'>Sneakers</option>
        <option value='Jersey'>Jersey</option>
        <option value='Memorabilia'>Memorabilia</option>
      </Form.Field>
    </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
</Segment>
<Parallaximg imgsrc= "https://cdn.vox-cdn.com/uploads/chorus_asset/file/18243701/163fa69302" height= "450px" opacity= ".2">
</Parallaximg>
</ParallaxProvider>
    )
   }
 }



