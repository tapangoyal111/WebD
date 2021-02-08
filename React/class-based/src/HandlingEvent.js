import React, { Component } from "react"
import ReactDOM from "react-dom"

class HandlingEvent extends Component{

    clicked(){
        console.log("I was clicked")
    }

    render(){
        return (
            <div>
                <img src="http://www.fillmurray.com/200/100" onPointerEnter={this.clicked}/>
                <br/>
                <br/>

                <button onClick={this.clicked}>Click Me</button>   
            </div>
        )
    }
}

export default HandlingEvent