import React, { Component } from "react"
import ReactDOM from "react-dom"


class State extends Component{
    
    constructor(){
        super()
        this.states={
            name:"Tapan",
            age:22
        }
    }

    render(){
        return(
            <div>
                <h3>{this.states.name}</h3>
                <h3>{this.states.age} years old</h3>

            </div>

        )
        
    }
}


export default State