import React from 'react'
import { Link } from 'react-router-dom'

function Sc1() {
    return (
        <div className = 'sc'>
            <button className =".btnf2" ><Link to ="/play">Play Again</Link> </button>
            <button className =".btnf2" ><Link to ="/qt">Home</Link> </button>
        </div>
    )
}

export default Sc1
