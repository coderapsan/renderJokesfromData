import React from "react";
export default function Jokes(props){
return(
  <div>
    <h1>
    {props.peakupline}

    </h1>
    <p>
    {props.punchline}

    </p>
    <hr>
    </hr>
  </div>
)
}