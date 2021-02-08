import React, { Component } from "react"
import ReactDOM from "react-dom"

class StateChange extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.Change=this.Change.bind(this)
    }
    Change(){
        this.setState(function change(prevState){
            return(
                {count:prevState.count + 1} 
            )
            
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Change}>Change</button>
            </div>
        )
    }
}
export default StateChange