import { Button } from "semantic-ui-react"
import FixedHeader from '../header/FixedHeader'
import "./userpage.css"
import { ParallaxProvider } from "react-scroll-parallax"
import Parallaximg from '../Parallaximg'
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
    <div>
    <FixedHeader></FixedHeader>
         
  <ParallaxProvider>
     <Parallaximg imgsrc= "https://www.si.com/.image/t_share/MTY5MzIxMjEzNzc1MDYyMzA1/magic-johnson-larry-bird.jpg" height= "450px" opacity= ".5">
       </Parallaximg>
       <br></br>
         {this.props.newUser === false ? <form onSubmit = {this.handleSubmit}>
         <input onChange = {(e) => this.handleUserName(e)} className = "amazing" placeholder = "Creat username"></input>
         <input onChange = {(e) => this.handlePassword(e)} className = "amazing" placeholder = "Create password"></input>
         <br></br>
         <button>Submit</button>
          </form> : <div><h1>Welcome! Please return to the home page and log in.</h1>
          <Link to = "/"><Button>Home</Button></Link></div>}
          <br></br> 
       <Parallaximg imgsrc= "https://www.ncaa.com/_flysystem/public-s3/styles/large_16x9/public-s3/images/2019-07-29/palestra-old-picture.jpg?h=90fbe72c&itok=UZGjCEgD" height= "450px" opacity= ".5">
       </Parallaximg>
  </ParallaxProvider>
 </div>
    )
   }
 }






  
  

