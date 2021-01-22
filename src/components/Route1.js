import React from 'react'
import { Link } from 'react-router-dom'
import "./Mplay.css";
import "./ques.css";


function Route1(props) {
    console.log("about",props.location.stats) 
    return (
        <div className = "score">
            <p>Score - {props.location.stats.score}</p>
            <p>Questions attempetd - {props.location.stats.qa}</p>
            <button className =".btnf2" ><Link to ="/home">Play Again</Link> </button>
            <button className =".btnf2" ><Link to ="/">Home</Link> </button>
        </div>
    )
}

export default Route1
