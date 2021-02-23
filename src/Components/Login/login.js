import React from 'react'
import LgnButton from '../btnLogin/btnLogin'
import './login.css'

function Login() {
    return(
        <div className="row dv-stl-lgn">
            <div className="col-lg-12 col-md-12 lgn-box">
                <h1 className="lgn">Login</h1>
                <div className="dv-inpt-lgn">
                <input type="text" className="inpt-lgn" placeholder="Your Email"></input>
                <input type="password" className="inpt-lgn" placeholder="Your Password"></input>
                <p className="lgn">Forgot your password?</p>
                <LgnButton text="Login"/>
                </div>
            </div>
        </div>
    )
}

export default Login