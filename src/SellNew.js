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
     image: '', 
     price: 0, 
     title: "", 
     product_type: "", 
     player_id: 14 
 }

handleSize = (e) =>{
    this.setState({
        size: e.target.value
    })
}

handleFormInputTitle = (e) => {
  this.setState({
    title: e.target.value,
    
  })
}

handleFormInputImage = (e) => {
  this.setState({
    image: e.target.value 
  })
}

handleFormInputPrice = (e) => {
  this.setState({
    price: e.target.value, 
  })
}

handleFormInputDesc = (e) => {
  this.setState({
    desc: e.target.value, 
  })
}

handleFormInputType = (e) => {
  this.setState({
    product_type: e.target.value, 
  })
}

handleSubmit = (e) => {
  e.preventDefault()

  this.props.newProduct(this.state)
}

 render() {
  return(
   <ParallaxProvider>
    <FixedHeader token = {this.props.token} cartCount = {this.props.cartCount}></FixedHeader>
    <br></br>
    <Segment color = "gray" size = "small" inverted>
      {this.props.newItemDisplay === false ? <h2>New Product Form</h2> : <h2>Product Added!</h2>}
    <br></br>
    {this.props.newItemDisplay === false ? <Form onSubmit = {this.handleSubmit} inverted>
      <Form.Group widths='equal'>
        <Form.Input onChange = {(e) => this.handleFormInputTitle(e)} fluid label='Product Title' placeholder='Product Title' />
        <Form.Input onChange = {(e) => this.handleFormInputImage(e)} fluid label='Image Url' placeholder='Image Url' />  
        <Form.Input onChange = {(e) => this.handleFormInputPrice(e)} fluid label='Price' placeholder='Price' />
        <Form.Input onChange = {(e) => this.handleFormInputDesc(e)} fluid label='Description' placeholder='Product Details' />
      </Form.Group> 
      <Form.Group widths='equal'>
      <Form.Field onChange = {(e) => this.handleSize(e)} label='Size' control='select'>
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
      <Form.Field onChange = {(e) => this.handleFormInputType(e)} label='Product Type' control='select'>
        <option value='small'>Other</option>
        <option value='small'>Sneakers</option>
        <option value='Jersey'>Jersey</option>
        <option value='Memorabilia'>Memorabilia</option>
      </Form.Field>
    </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form> : <Button onClick = {()=> this.props.newItemPublished() }>Add More</Button>}
</Segment>
<Parallaximg imgsrc= "https://images.unsplash.com/photo-1590227632180-80a3bf110871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" height= "450px" opacity= "91.6">
</Parallaximg>
</ParallaxProvider>
    )
   }
 }



