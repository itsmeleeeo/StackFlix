import React from 'react'
import './Footer.css'
import logo from '../img/logo.png'

function Footer() {
    return(
        <div className="cl5">
            <img src={logo} alt="logo" />
            <span className="spn-ftr">About us</span>
            <span className="spn-ftr">Privacy Policy</span>
            <span className="spn-ftr">Carrers</span>
            <span className="spn-ftr">All Rights Reserved - Mozart Dev Corp.</span>
        </div>
    )
}

export default Footer