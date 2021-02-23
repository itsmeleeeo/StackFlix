import React from 'react'
import BackTitle from '../Back/Back'
import Img4 from '../img/pic4.png'
import Img5 from '../img/pic5.jpg'
import Img6 from '../img/pic6.jpg'
import './BackSec.css'


function BackSection() {
    return(
        <div className="row">
            <BackTitle text="Back-End" />
            <div className="col-lg-4 col-md-4">
                <img src={Img4} alt="video 1" className="img-back-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img5} alt="video 2" className="img-back-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img6} alt="video 3" className="img-back-sz" />
            </div>
        </div>
    )
}

export default BackSection