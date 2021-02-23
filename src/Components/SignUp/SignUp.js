import React from 'react'
import LgnButton from '../btnLogin/btnLogin'
import './SignUp.css'

function SignUp() {
    return(
        <div className="row dv-stl-lgn">
            <div className="col-lg-12 col-md-12 lgn-box">
                <h1 className="lgn">Sign Up</h1>
                <div className="dv-inpt-lgn">
                <input type="text" className="inpt-lgn" placeholder="First Name"></input>
                <input type="text" className="inpt-lgn" placeholder="Last Name"></input>
                <input type="email" className="inpt-lgn" placeholder="Your Email"></input>
                <input type="password" className="inpt-lgn" placeholder="Your password"></input>
                <input type="checkbox" className="inpt-lgn"></input>
                <LgnButton text="Sign Up"/>
                </div>
            </div>
        </div>
    )
}

export default SignUp