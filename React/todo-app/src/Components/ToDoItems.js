import React from "react"
import ReactDOM from "react-dom"
import style from "../index.css"


function ToDoItems(props){
    return (
        <div className="checkbox">
            <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}></input>
            <p>{props.item.text}</p>
        </div>
    )

}

export default ToDoItems