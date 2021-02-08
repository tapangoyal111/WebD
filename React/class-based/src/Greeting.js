import React from "react"
import ReactDOM from "react-dom"

class Greeting extends React.Component{
    render(){
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;
    if (hours<12){
        timeofDay="morning"
    }
    else if (hours<17){
        timeofDay="afternoon"
    }
    else{
        timeofDay="night"
    }
    
        return(
        <div>
            <h1>
                Good {timeofDay} to you , Sir or Madam..
            </h1>
        </div>

        )
    }
}

export default Greeting