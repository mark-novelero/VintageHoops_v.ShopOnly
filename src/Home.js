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

checkWindow = () => {
  console.log(window.innerHeight)
}


render() {

  let finalHeight = "600px"
  if (window.screen.height > 700 && window.screen.height <= 800){
    finalHeight = "500px"
  }
  if (window.screen.height > 1049 && window.screen.height < 1199){
    finalHeight = "750px"
  }
  if (window.screen.height >= 1200){
    finalHeight = "880px"
  }
  if (window.screen.height < 700){
    finalHeight = "520px"
  }
  if (window.screen.height === 900){
    finalHeight = "615px"
  }
 

    return(
      <ParallaxProvider >
        <div className = "home-top">
          <Parallaximg  imgsrc= "https://i.imgur.com/WqRoJLv.jpg" height= {finalHeight} opacity= ".5">
            <h1 onClick = {() => {this.checkWindow()}} className = "title" style= {{position: 'absolute'}}>Vintage Hoops</h1>
          </Parallaximg>
            <h2 className = "sub">Buy and sell vintage NBA apparel</h2>
            <div className = "div-line"></div>
            <Link to = '/main'><button onClick = {() => {this.props.changeTitlePage()}} className = "shop"  >Shop Now</button></Link>
          <Parallaximg 
            imgsrc= "https://i.imgur.com/qzQ5y4K.png" height= "480px" opacity= ".2">
          </Parallaximg>
        </div>   
           
      </ParallaxProvider>
      )
    }
}




  

