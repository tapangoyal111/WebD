import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from "./Components/MyInfo"
import App from "./Components/App"
import Props from './Components/Props';


var mynewP=document.createElement("p")
mynewP.innerHTML="THis is my paragraph"

// ReactDOM.render(What do render,where to render)


// functional component


function MyApp(){
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>)
}



// ReactDOM.render(<MyApp/>,document.getElementById("root"))

ReactDOM.render(<Props/>,document.getElementById("root"))