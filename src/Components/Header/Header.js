import React from 'react'
import './Header.css'
import logo from '../img/logo.png'

function Header() {
    return(
        <div className="cl5">
            <img src={logo} alt="logo" />
            <button>Login</button>
            <button>Sign Up</button>
            <button>Be a Member</button>
            <button>Upload Your Video</button>
        </div>
    ) 
}

export default Header