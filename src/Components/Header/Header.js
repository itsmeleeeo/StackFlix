import React from 'react'
import { Link } from 'react-router-dom'
import LgnButton from '../btnLogin/btnLogin'
import SignButton from '../btnSign/btnSign'
import Logo from '../img/logo.png'
import './Header.css'

function Header() {
    return (
        <div className="row hdr">
            <div className="col-lg-6 col-md-6">
                <Link to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <div className="col-lg-3 col-md-3">
                <Link to="/login" >
                    <LgnButton text="Login" />
                </Link>
            </div>
            <div className="col-lg-3 col-md-3">
                <Link to="/signUp" >
                    <SignButton text="Sign Up" />
                </Link>
            </div>
        </div>
    )
}

export default Header