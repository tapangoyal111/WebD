import React from "react"
import ReactDOM from "react-dom"
import ToDoItems from "./Components/ToDoItems"
import style from "./index.css"
function App(){
    return (
        <div className="todo-item">
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
        

            
        </div>
        
    )
}

export default App