import React from 'react'
import './Front.css'
import video1 from '../img/pic1.png'
import video2 from '../img/pic2.jpg'
import video3 from '../img/pic3.jpg'

function FrontVideos() {
    return(
        <div className="cl-3">
            <img src={video1} alt="video 1"/>
            <img src={video2} alt="video 2"/>
            <img src={video3} alt="video 3"/>
        </div>
    )
}

export default FrontVideos