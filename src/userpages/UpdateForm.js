import React, { Component } from 'react'
import { Form, Button } from "semantic-ui-react"
import './userpage.css';
import {Link} from 'react-router-dom'



export default class UpdateForm extends Component {


 state = {
     id: this.props.selectUserProduct.id,
     size: this.props.selectUserProduct.size, 
     desc: this.props.selectUserProduct.desc, 
     seller_id: 12, 
     team: 'na',
     image: this.props.selectUserProduct.image, 
     price: this.props.selectUserProduct.price, 
     title: this.props.selectUserProduct.title, 
     product_type: this.props.selectUserProduct.product_type, 
     player_id: 14 
 }



handleSize = (e) =>{
    this.setState({
        size: e.target.value, 
        seller_id: this.props.currentSeller.id
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

  this.props.updateProduct(this.state)
}




 render() {
  
  return(
  <div className = "new-item-form">
      <div className = "main-form">
        {this.props.newItemDisplay === false ? <h2 className = "new-product-form">Product Update</h2> : <h2 className = "listing-updated">Listing Updated</h2>}
        {this.props.newItemDisplay === false ? 
            <Form onSubmit = {this.handleSubmit} inverted>
                <Form.Group widths='equal' center>
                    <Form.Input className = "update-input" onChange = {(e) => this.handleFormInputTitle(e)}  fluid label='Product Title' placeholder= {this.props.selectUserProduct.title} />
                </Form.Group>  
                <Form.Group widths='equal'>  
                    <Form.Input className = "update-input" onChange = {(e) => this.handleFormInputImage(e)}  fluid label='Image Url' placeholder= {this.props.selectUserProduct.image}></Form.Input>  
                    <Form.Input className = "update-input" onChange = {(e) => this.handleFormInputPrice(e)} fluid label='Price' placeholder= {this.props.selectUserProduct.price}  />
                    <Form.Input className = "update-input" onChange = {(e) => this.handleFormInputDesc(e)} fluid label='Description' placeholder={this.props.selectUserProduct.desc}  />
                </Form.Group> 
                <Form.Group widths='equal'>
                    <Form.Field onChange = {(e) => this.handleSize(e)} label='Size' control='select'>
                        <option value={this.props.selectUserProduct.size}>{this.props.selectUserProduct.size}</option>
                        <option value='na'>--</option> 
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
                        <option value={this.props.selectUserProduct.product_type}>{this.props.selectUserProduct.product_type}</option>   
                        <option value='small'>Other</option>
                        <option value='small'>Sneakers</option>
                        <option value='Jersey'>Jerseys</option>
                        <option value='Memorabilia'>Memorabilia</option>
                    </Form.Field>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form> 
            : 
            <Link to= "/useritem"><Button onClick = {()=> this.props.newItemPublished() }>See Updated Item</Button></Link>}
        </div>
    </div>
    )
  }
}