import React from 'react'
import './Header.css'

function btnSignUp(props) {
    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}

export default btnSignUp