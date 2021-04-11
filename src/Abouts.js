import React from 'react'
import Sahoby from './images/Sahoby.jpg';
import './style.css'

const Abouts = () => {
    return(
        <div className="main">
            
            <div className="image">
                <img src={Sahoby} alt="" />
            </div>
            <div className="content2">
                <p>Name: Andriantsimba Maminiaina Sahoby</p>
                <p>Nim: 1841720220</p>
                <p>Class: TI - 3G</p>
                <p>Origin: Madagascar</p>
                <p>Address: Jl. Kesumba Dalama no.15</p>
            </div>
            
        </div>
    );
}
export default Abouts;