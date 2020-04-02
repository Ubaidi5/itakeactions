import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    const LinkStyle= {
        textDecoration: "none"
    }
    return(
        <ul>
            <Link style={LinkStyle} to="/take-action"><li>TAKE ACTIONS</li></Link>
            <Link style={LinkStyle} to="/reward"><li>REWARD</li></Link>
            <Link style={LinkStyle} to="/submit-a-report"><li>SUBMIT A REPORT</li></Link>
            <Link style={LinkStyle} to="/blog"><li>BLOG</li></Link>
            <Link style={LinkStyle} to="/about-us"><li>ABOUT US</li></Link>
        </ul>
    );
}

export default Navbar;