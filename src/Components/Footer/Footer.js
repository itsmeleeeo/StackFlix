import React from 'react'
import './Footer.css'

function Footer(props) {
    return(
        <div className="row ftr">
            <div className="col-lg-6 col-md-6">
                <p className="prgh-ftr">{props.text}</p>
            </div>
            <div className="col-lg-3 col-md-3">
                <p className="prgh-ftr">About us</p>
            </div>
            <div className="col-lg-3 col-md-3">
                <p className="prgh-ftr">Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer