import React from "react"
import ReactDOM from "react-dom"

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    Welcome , {this.props.username}
                </header>

            </div>
        )
    }
}

export default Header