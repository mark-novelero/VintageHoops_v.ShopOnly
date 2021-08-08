import { Button } from "semantic-ui-react"
import "./userpage.css"
import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class NewUser extends Component {
 
state = {
   username: "", 
   password: ""
}

handlePassword = (e) =>{
   this.setState({
      password: e.target.value
   })
}

handleUserName = (e) =>{
  this.setState({
     username: e.target.value
  })
}

handleSubmit = (e) =>{
  e.preventDefault()

  this.props.newUserCreation(this.state)
}


render() {
  return(
    <div className = "new-user">   
      <br></br>
      <h2 className = "new-product-form">Registration Form</h2> 
      <div className = "new-user-form">
        {this.props.newUser === false ? 
          <form onSubmit = {this.handleSubmit}>
            <input  onChange = {(e) => this.handleUserName(e)} className = "new-username" placeholder = "Create Username"></input>
            <input onChange = {(e) => this.handlePassword(e)} className = "new-user-password" placeholder = "Create Password"></input>
            <br></br>
            <button className = "newuser-button">Submit</button>
          </form> 
        : 
        <div>
          <h1 className = "newuser-registration">Welcome! Please return to the home page and log in.</h1>
          <Link to = "/"><Button onClick = {() => {this.props.changeTitlePage()}}>Home</Button></Link>
        </div>}
      </div>
      <br></br>     
    </div>
    )
  }
}






  
  

