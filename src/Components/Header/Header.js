import React from 'react'
import Login from'./btnLogin'
import Sign from './btnSignUp'
import Member from './beMember'
import Up from './upVideo'
import './Header.css'
import logo from '../img/logo.png'

function Header() {
    return(
        <div className="cl5">
            <img src={logo} alt="logo" />
            <Login text="Login"/>
            <Sign text="Sign Up"/>
            <Member text="Be A Member"/>
            <Up text="Upload Your Video"/>
        </div>
    ) 
}

export default Header