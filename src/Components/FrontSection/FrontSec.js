import React from 'react'
import FrontTitle from '../Front/Front'
import SectionBack from '../BackSection/BackSec'
import SectionDataBase from '../DatabaseSection/DatabaseSection'
import Img1 from '../img/pic1.png'
import Img2 from '../img/pic2.jpg'
import Img3 from '../img/pic3.jpg'
import './FrontSection.css'

function FrontSection() {
    return(
        <div className="row">
            <FrontTitle text="Front-End"/>
            <div className="col-lg-4 col-md-4">
                <img src={Img1} alt="video 1" className="img-front-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img2} alt="video 2" className="img-front-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img3} alt="video 3" className="img-front-sz" />
            </div>
            <SectionBack />
            <SectionDataBase />
        </div>
    )
}

export default FrontSection