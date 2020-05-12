import React, { Component } from 'react';
import '../../../styles/headers/header.css';
import logo from './images/logo-high-res.png' 
// import ResponsiveMenu from './responsive-menu';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import ResponsiveNavbar from './responsive-navbar';

class Header extends Component {
    constructor(){
        super()
        this.state = { sidebarStatus: false,
        search:"" }

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
                        <Link className={btnstyle} onClick={this.sidebarHandler}></Link>
                    </div>
                    {sidebar}
                    <div className="logo-image">                             {/* Second div --- Logo */}
                        <a href="/"><img className="logo" src={logo} alt="iTakeAction"/></a>
                    </div>
                        
                    <div className="links">                                  {/* Third div --- Links */}
                        <Navbar />
                    </div>
                        
                    <div className='side-btn'>
                        <input id="search-input" name="search" type="text" placeholder="Search" value={this.state.search} onChange={(e)=>this.setState({search:e})} ref={(e)=>this._input = e} />                               {/* Fourth div --- Search area */}
                        <i className="fa fa-search" id="search-button" onClick={()=>{
                            if(this.state.search !== '') {
                                // go and search for the string
                            }
                            else {
                                if(this._input.style.width) {
                                    this._input.style.width ='';
                                    this._input.style.border='none';
                                    this._input.style.display = 'none';
                                }
                                else {
                                    this._input.style.width = '40%';
                                    this._input.style.borderBottom='1px solid black';
                                    this._input.style.display = 'inline-block';
                                }
                            }
                    }}></i>
                        <button className="login">LOGIN</button>
                        <button className="signup">SIGN UP</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;