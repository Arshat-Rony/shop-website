import React from 'react';
import img from "../../images/phone.jpg"
import "./Home.css"

const Home = () => {
    return (
        <div className="section">
            <div className='home'>
                <div className="home-detail">
                    <h1>Dokan always <br /> offer <span className='best'>Best Product</span></h1>
                    <h2>Choose Whatever your Choice</h2>
                    <p> laptop is a small personal computer.we have designed to be more portable than traditional desktop computers, with many of the same abilities. All folded and normal laptops are here for transportation and have a built-in keyboard and touchpad.</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className="home-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;