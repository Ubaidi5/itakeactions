import React, { Component } from 'react';
import './responsive-navbar.css'
import Navbar from '../index/Header/navbar';

class ResponsiveNavbar extends Component {
    constructor(){
        super()
        this.state={}
    }
    
    render() { 
        return ( 
            <div className="navbar">
                <div className="menu">
    {/* navbar */}
                            <Navbar />
   {/* Buttons */}
                            <button className="btns"><span className='fas fa-sign-in-alt btn-icon'></span> LOGIN</button><br/>
                            <button className="btns"><span className='fa fa-bars btn-icon'></span> SIGN UP</button>
  {/* Social Links */}
                            <div className="social-links">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-youtube"></a>
                            </div>
                        </div>
                        <div className="backdrop" />
            </div>
         );
    }
}
 
export default ResponsiveNavbar;