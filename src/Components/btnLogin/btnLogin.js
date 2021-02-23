import React from 'react'
import '../btnLogin/btnLogin.css'

function BtnLogin(props) {
    return(
        <div>
            <button>{props.text}</button>
        </div>
    )
}

export default BtnLogin