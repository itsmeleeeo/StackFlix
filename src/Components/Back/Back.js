import React from 'react'
import './Back.css'

function Back(props) {
    return(
        <div className="cl1">
            <h1 className="back">{props.text}</h1>
        </div>
    ) 
}

export default Back