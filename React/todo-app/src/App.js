import React, { Component } from "react"
import ReactDOM from "react-dom"
import ToDoItems from "./Components/ToDoItems"
import style from "./index.css"
import todosData from "./Components/todosData"
class  App extends Component{
    constructor(){
        super()
        this.state={
            todo:todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
        alert(id)
        console.log(id)
    }
    render(){
        const TodoArr=this.state.todo.map((items) => <ToDoItems key={items.id} item={items} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-item">
            {TodoArr}   
            </div>
            
        )
    }
    
    
}

export default App