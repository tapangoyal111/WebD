import React, { Component } from "react"
import ReactDOM from "react-dom"

class State2 extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
        
    }
    render(){
        let val=this.state.isLoggedIn?"In":"Out";
        return(
            <div>
                <h1>You are currently logged {val}</h1>
            </div>

        )
    }
}

export default State2