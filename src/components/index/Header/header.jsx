import React, { Component } from 'react';
import './header.css'
import logo from './logo-high-res.png' 
import ResponsiveMenu from './responsive-menu';
import Navbar from './navbar';
import ResponsiveNavbar from '../../Responsive-Navbar/responsive-navbar';

class Header extends Component {
    constructor(){
        super()
        this.state = { sidebarStatus: false }

        this.sidebarHandler = this.sidebarHandler.bind(this)
    }
    
    sidebarHandler(){
        this.setState({sidebarStatus: !this.state.sidebarStatus})
    }

    render() { 
        let sidebar;
        let btnstyle=" fa fa-bars"
        
        if(this.state.sidebarStatus){
            sidebar = <ResponsiveNavbar />
            btnstyle= "fa fa-times"
        }
        return ( 
            <div className="area-covering">
                <div className="header">
                    <div className="res-menu-btn">                           {/* First div --- menu button */}
                        <a className={btnstyle} onClick={this.sidebarHandler}></a>
                    </div>
                    {sidebar}
                    <div className="logo-image">                             {/* Second div --- Logo */}
                        <a href="/"><img className="logo" src={logo} alt="iTakeAction"/></a>
                    </div>
                        
                    <div className="links">                                  {/* Third div --- Links */}
                        <Navbar />
                    </div>
                        
                    <div className='side-btn'>                               {/* Fourth div --- Search area */}
                        <i className="fa fa-search"></i>
                        <button className="login">LOGIN</button>
                        <button className="signup">SIGN UP</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;