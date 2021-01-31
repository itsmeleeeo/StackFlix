import React from 'react'
import './Back.css'
import video5 from '../img/pic5.jpg'
import video6 from '../img/pic6.jpg'
import video7 from '../img/pic4.png'

function BackVideos() {
    return(
        <div className="cl-4">
            <img src={video5} alt="video 5"/>
            <img src={video6} alt="video 6"/>
            <img src={video7} alt="video 7"/>
        </div>
    )
}

export default BackVideos