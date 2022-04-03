import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { faSearch, faMobileButton, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <h1>
                <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                Dokan</h1>
            <div className="menu">
                <li>< CustomLink to='/home'>Home</CustomLink></li>
                <li>< CustomLink to='/about'>About</CustomLink></li>
                <li>< CustomLink to='/blogs'>Blogs</CustomLink></li>
                <li>< CustomLink to='/reviews'>Reviews</CustomLink></li>
                <li>< CustomLink to='/dashboard'>Dashboard</CustomLink></li>
            </div>
            <div className='search'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default Header;