import React from "react"
import ReactDOM from "react-dom"
import Jokes from "./Jokes"
function App(){
  return(
    <div>
      <Jokes joke={{question:"What is ur name?"  , punch:"Ramlal ka ladka"}}/>
      <Jokes joke={{question:"What is ur name?"  , punch:"Ramlal ka ladka"}}/>
      <Jokes joke={{question:"What is ur name?"  , punch:"Ramlal ka ladka"}}/>
      <Jokes joke={{question:"What is ur name?"  , punch:"Ramlal ka ladka"}}/>
      <Jokes joke={{question:"What is ur name?"  , punch:"Ramlal ka ladka"}}/>
      
    </div>
  )
}


export default App