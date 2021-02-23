import React from 'react'
import DatabaseTitle from '../DBA/Database'
import Img7 from '../img/pic7.png'
import Img8 from '../img/pic8.png'
import Img9 from '../img/pic9.png'
import './DatabaseSection.css'

function DataBaseSection() {
    return(
        <div className="row">
            <DatabaseTitle text="Database" />
            <div className="col-lg-4 col-md-4">
                <img src={Img7} alt="video 1" className="img-dba-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img8} alt="video 2" className="img-dba-sz" />
            </div>
            <div className="col-lg-4 col-md-4">
                <img src={Img9} alt="video 3" className="img-dba-sz" />
            </div>
        </div>
    )
}

export default DataBaseSection