import React, { Component } from 'react'
import { Grid, Divider, Form, Button, Segment} from "semantic-ui-react"
import './cart.css'
import CartItemCard from './CartItemCard'



class PaymentForm extends Component {
 
 render() {

    const tax = this.props.cartSum * .0825
    const roundedTax = tax.toFixed(2);
    const shipping = 5.95
    const preTotal = this.props.cartSum + tax + shipping
    const total = preTotal.toFixed(2)

  return(

    <div>
        <Segment>
            <Grid columns={2} relaxed='very'>
                <Grid.Column >   
                    <div className = "order-summary">
                        <h1 className = "order-summary">Order Summary</h1>
                    </div>
                    <div className = "order-summary-topdiv">
                        {this.props.cartItems.map((cartItem) => <CartItemCard cartItem = {cartItem}></CartItemCard>)}
                    </div>
                    <div>
                        <div className= "sum-price-title">
                            <h3>Billing Summary</h3>
                            <table id = "customers">
                            <tr >
                                <td >Subtotal:</td>
                                <td >${this.props.cartSum}</td>
                            </tr>
                            <tr >
                                <td >Sales Tax:</td>
                                <td >${roundedTax}</td>
                            </tr>
                            <tr >
                                <td > Shipping:</td>
                                <td > ${shipping}</td>
                            </tr>
                            <br></br>
                            <tr >
                                <td > Total:</td>
                                <td > ${total}</td>
                            </tr>
                            <br></br>
                        </table>
                    </div>
                </div>  
                </Grid.Column>
                <Grid.Column>
                    <div className = "billing">
                        <h2 className = "billing">Billing Information</h2>
                    </div> 
                    <Form className = "payment-form">
                        <Form.Group unstackable widths={2}>
                            <Form.Input width = {8} size = "small" label='First name' placeholder='First name' />
                            <Form.Input label='Last name' size = "small" placeholder='Last name' />
                        </Form.Group>
                    <br></br>
                    <br></br>
                        <Form.Group  center>
                            <Form.Input width = {12} size = "small" label='Credit Card Number' placeholder='Credit Card Number' />
                            <Form.Input width = {2} size = "small" label='Exp' placeholder='MM/YY'/>
                            <Form.Input width = {2} size = "small" label='CVC' placeholder='CVC'/>
                        </Form.Group>
                        <Form.Field size = "small" label='Card Type' control='select'>
                            <option >- -</option>
                            <option value='Mastercard'>Mastercard</option>
                            <option value='Visa'>Visa</option>
                            <option value='Discover'>Discover</option>
                            <option value='American Express'>American Express</option>
                        </Form.Field>
                    <br></br>
                    <br></br>
                        <Form.Group>
                            <Form.Input size = "small" width ={14} label='Address' placeholder='Address' />
                            <Form.Input size = "small" width ={2} label='Apt/Floor'  />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input size = "small" label='State' placeholder='State' />
                            <Form.Input size = "small" label='Zip Code' placeholder='Zip Code' />
                        </Form.Group>
                    <br></br>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    </div>
    )
   }
 }

export default PaymentForm