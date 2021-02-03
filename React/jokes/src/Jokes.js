import React from "react"
import ReactDOM from "react-dom"

function Jokes(props){
    return(
        <div>
            <h3>{props.joke.question}</h3>
            <p>{props.joke.punch}</p>
        </div>
    )
}


export default Jokes