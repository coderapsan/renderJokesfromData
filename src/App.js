import React from "react";
import  ReactDOM  from "react-dom";
import Jokes from"./Components/Jokes"
import jokesData from "./Components/jokesData";

export default function App(){
    const jokesElement= jokesData.map(joke=>{
        return<Jokes {...joke}/>
    })
    return(
        <div>
         {jokesElement}
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))