import React from "react"
import ReactDOM from "react-dom"

function ContactCard(props){
    console.log(props.contact)
    return(
        <div className="contact-card">
                <img className="logo" src={props.contact.img}/>
                <h3>{props.contact.name}</h3>
                <p>{props.contact.place}</p>
                <p>{props.contact.date}</p>
            </div>
    )
}

export default ContactCard