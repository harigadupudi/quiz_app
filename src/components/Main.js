import React from 'react'
import { Link } from 'react-router-dom'
import "./ques.css";
import "./Mplay.css";
function Main() {
    return (
        
        <div className = "mPlay" /* style ={div} */>
            <p /* style ={p} */ >Quiz app</p><br></br><br></br>
            <Link to = "/home" ><button>Play</button></Link>
        </div>
        
    )
}

export default Main
