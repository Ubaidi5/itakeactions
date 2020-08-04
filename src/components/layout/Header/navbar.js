import React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/headers/header.css';

function Navbar(){
    return(
        <ul className='mb-0 mt-1'>
            <li><Link className='navbar-routes' to="/take-action">TAKE ACTIONS</Link></li>
            <li><Link className='navbar-routes' to="/reward">REWARD</Link></li>
            <li><Link className='navbar-routes' to="/submit-a-report">SUBMIT A REPORT</Link></li>
            <li><Link className='navbar-routes' to="/blog">BLOG</Link></li>
            <li><Link className='navbar-routes' to="/about-us">ABOUT US</Link></li>
        </ul>
    );
}

export default Navbar;