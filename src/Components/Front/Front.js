import React from 'react' 
import './Front.css'

function FrontTitle(props) {
    return(
        <div>
            <h1 className="font">{props.text}</h1>
        </div>
    )
}

export default FrontTitle