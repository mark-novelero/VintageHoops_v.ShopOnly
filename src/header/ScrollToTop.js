import React, { Component } from 'react'




export default class ScrollToTop extends Component {

 state = {
     intervalId: 0, 
     topPosition: false
 }

componentDidMount() {
     document.addEventListener("scroll", () => {
        if (window.scrollY > 170){
             this.setState({
                 topPosition: true
             })
        } else {
            this.setState({
                topPosition: false
            })    
        }
    });
    window.scrollTo(0,0);
}

onScrollStep = () => {
    if(window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
}

scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs)
    this.setState({
        intervalId: intervalId
    })
}

 renderGoTopIcon = () => {
     if(this.state.topPosition) {
        return (
            <div className = "move-up">
                <span>
                    <i class="angle double up icon" id = "double-arrow" onClick = {this.scrollToTop}></i>
                </span>
            </div>
        )
     }
 }


 render() {
  return(
   <div>{this.renderGoTopIcon()}</div>
    )
   }
 }



