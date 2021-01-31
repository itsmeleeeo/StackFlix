import React from 'react'
import './Front.css'

function Front(props) {
    return(
        <div className="cl1">
            <h1 className="front">{props.text}</h1>
        </div>
    )
}

export default Front