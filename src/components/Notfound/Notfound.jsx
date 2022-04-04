import React from 'react';
import './Notfound.css'
import img from "../../images/404.jpg"
const Notfound = () => {
    return (
        <div className='section'>
            <div className="notfound">
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default Notfound;