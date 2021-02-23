import React from 'react' 
import './Back.css'

function BackTitle(props) {
    return(
        <div>
            <h1 className="back">{props.text}</h1>
        </div>
    )
}

export default BackTitle