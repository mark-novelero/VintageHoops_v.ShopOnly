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
          <Parallaximg imgsrc= "https://www.gannett-cdn.com/-mm-/e9cd268047e6efd7b9e5d1b5ec378686ee757ecd/c=0-187-3598-2211/local/-/media/2020/05/12/USATODAY/usatsports/abdul-jabbar-1974-celtics.jpg" height= "700px" opacity= ".5">
            <h1 className = "title" style= {{position: 'absolute'}}>Vintage Hoops</h1>
          </Parallaximg>
            <h2 className = "sub">Buy and sell vintage NBA apparel</h2>
            <div className = "div-line"></div>
            <Link to = '/main'><button onClick = {() => {this.props.changeTitlePage()}} className = "shop"  >Shop Now</button></Link>
          <Parallaximg imgsrc= "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg2Nzc3NjIwOTgxMDA5/michael-jordan-1988-nba-slam-dunk-contest.jpg" height= "450px" opacity= ".2">
          </Parallaximg>
            {this.props.token === false? <h3 className = "return">Returning customers</h3> : null}
            <div className = "div-line"></div>
            <br></br>
            {this.props.token === true ? <h2 className = "welcome">Welcome {this.props.currentUser}</h2> 
            : 
            <form onSubmit = {this.handleSubmit} className = "login">
                <input onChange = {(e) => this.handleUserName(e)} className = "username" placeholder = "username"></input>
                <input onChange = {(e) => this.handlePassword(e)} className = "password" placeholder ="password"></input>
                <br></br>
              {this.props.token === false ? <button className = "log-btn">Login</button> : null} 
            </form>}
            {this.props.token === false ? null : <Link to = '/userpage'><button className = "enter" onClick = {() => {this.props.changeTitlePage()}}>Enter</button></Link>}
          <Parallaximg imgsrc= "https://theundefeated.com/wp-content/uploads/2019/01/GettyImages-1133669_16x9.jpg?w=1500" height= "300px" opacity= ".6">
        </Parallaximg>
      </ParallaxProvider>
      )
    }
}




  

