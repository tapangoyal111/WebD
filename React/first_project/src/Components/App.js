import React from "react"
import ReactDOM from "react-dom"
import Footer from "./Footer"
import MyInfo from "./MyInfo"
import style from "../index.css"
function App(){
    const firstName="Tapan"
    const lastName = "Goyal"
    return (
        <div>
            <header className="gjfkj">
                Hello {firstName + " " + lastName}
            </header>
            <MyInfo/>
            <Footer/>
            
        </div>

    )
}

export default App
