import React from 'react'
import './Header.css'

function btnLogin(props) {
    return(
        <div>
            <button>{props.text}</button>
        </div>
    )
}

export default btnLogin