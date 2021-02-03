import React from "react"
import ReactDOM from "react-dom"
import style from "../index.css"
import flower from "../photos/flower.jpg"
import hut from "../photos/hut.jpg"
import seaside from "../photos/seaside.jpg"
import temple from "../photos/temple.jpg"
import ContactCard from "./ContactCard"
function Props(){
    return (
        <div className="contact">
            <ContactCard contact={{img:flower, name:"flower", place:"Kanyakumari", date:"14/12/2019"}} />
            <ContactCard contact={{img:hut, name:"Hut", place:"Munnar", date:"14/12/2019"}} />
            <ContactCard contact={{img:seaside, name:"Seaside", place:"Ramesharam", date:"14/12/2019"}} />
            <ContactCard contact={{img:temple, name:"Temple", place:"Trivendram", date:"14/12/2019"}} />
            
        </div>
    )



}

export default Props