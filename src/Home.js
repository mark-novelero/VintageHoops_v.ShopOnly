import { ParallaxProvider } from "react-scroll-parallax"
import Parallaximg from './Parallaximg'
import './App.css';
import {Link} from 'react-router-dom'
import React, { Component } from 'react'



export default class Home extends Component {
 

state = {
    username: "", 
    password: ""
}


componentDidMount() {
    window.scrollTo(0, 0)
  }


handleUserName = (e) => {
    this.setState({
        username: e.target.value
    })
}


handlePassword = (e) => {
    this.setState({
        password: e.target.value
    })
}


handleSubmit =(e)=>{
    e.preventDefault()

    this.props.getSeller(this.state)   
}



render() {
    return(
      <ParallaxProvider>

          <Parallaximg imgsrc= "https://i.imgur.com/WqRoJLv.jpg" height= "610px" opacity= ".5">
            <h1 className = "title" style= {{position: 'absolute'}}>Vintage Hoops</h1>
          </Parallaximg>
            <h2 className = "sub">Buy and sell vintage NBA apparel</h2>
            <div className = "div-line"></div>
            <Link to = '/main'><button onClick = {() => {this.props.changeTitlePage()}} className = "shop"  >Shop Now</button></Link>
          <Parallaximg 
            imgsrc= "https://i.imgur.com/qzQ5y4K.png" height= "480px" opacity= ".2">
          </Parallaximg>
            
            { this.props.token === "false" ? <h3 className = "return">Returning customers</h3> : null}
            <div className = "div-line"></div>
            <br></br>
            { this.props.token !== "false"  ? <h2 className = "welcome">Welcome {this.props.currentUser}</h2> 
            : 
            <form onSubmit = {this.handleSubmit} className = "login">
                <input onChange = {(e) => this.handleUserName(e)} className = "username" placeholder = "username"></input>
                <input onChange = {(e) => this.handlePassword(e)} className = "password" placeholder ="password"></input>
                <br></br>
              {this.props.token == "false" ? <button className = "log-btn">Login</button> : null} 
            </form>}
            { this.props.loginError !== null ? <h5 className = "error">{this.props.loginError}</h5> : null }
            { this.props.token === "false" ? null : <Link to = '/userpage'><button className = "enter" onClick = {() => {this.props.changeTitlePage()}}>Enter</button></Link> }
          
          <Parallaximg imgsrc= "https://i.imgur.com/hOTFVYu.jpg" height= "300px" opacity= ".6">
        </Parallaximg>
      </ParallaxProvider>
      )
    }
}




  

