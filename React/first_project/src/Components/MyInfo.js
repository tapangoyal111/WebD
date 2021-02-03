import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    const styles = {
        background: "orange",
        color : "purple",
        textAlign : "center"
        
    }
    return (<div>
        <h1 style={styles}>Tapan GOyal</h1>
        <p>Hey I am tapan goyal. I like to do coding and typing a lot. Still i am just writing this paragraph for fun</p>
        <ul>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            
        </ul>
    </div>)
}


export default MyInfo
