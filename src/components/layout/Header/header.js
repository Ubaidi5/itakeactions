import React, { Component } from 'react';
import '../../../styles/headers/header.css';
import logo from './images/logo-high-res.png' 
// import ResponsiveMenu from './responsive-menu';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import ResponsiveNavbar from './responsive-navbar';
import Login from '../../modals/LoginModal';
import SignUp from '../../modals/SignUpModal';
import user from './images/user.png';

class Header extends Component {
    constructor(){
        super()
        this.state = { sidebarStatus: false,
            login:false,
            signup:false,
            authenticate:false,
            search:"",
            menu:false
        }

        this.sidebarHandler = this.sidebarHandler.bind(this)
    }
    
    sidebarHandler(){
        this.setState({sidebarStatus: !this.state.sidebarStatus})
    }

    render() { 
        let sidebar;
        let btnstyle=" fa fa-bars";
        let dropDown = false;
        
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
                        
                    <div className='side-btn row'>
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
                        {!this.state.authenticate && <div><button className="login" onClick={()=>this.setState({login:true})}>LOGIN</button>
                        <button className="signup" onClick={()=>this.setState({signup:true})}>SIGN UP</button></div>}
                        {this.state.authenticate && <div className="row ml-3">
                            <div>
                                <img src={user} alt="Profile" title="Profile" style={{width:'40px',height:'40px',borderRadius:'50%'}} />
                            </div>
                            <div className="ml-2" style={{textAlign:'left'}}>
                                <p className="mb-0">Charles Omofowan</p>
                                <small className="mt-0" style={{color:'#057f16'}}>4 ActBit Coins</small>
                            </div>
                            <i className="fa fa-angle-down" aria-hidden="true" onClick={()=>this.setState({menu:!this.state.menu})} style={{position:'relative',top:8, left:15, fontSize:35}}></i>
                            {this.state.menu && this.state.authenticate && <div className='drop-down'>
                                <ul className='m-0 p-0 list-unstyled'>
                                    <li className='drop-down-items'><Link className='text-decoration-none drop-down-links'><i className="fa fa-user drop-down-icons" aria-hidden="true"></i> My Profile</Link></li>
                                    <li className='drop-down-items'><Link className='text-decoration-none drop-down-links'><i className="fa fa-money drop-down-icons" aria-hidden="true"></i> My Wallet</Link></li>
                                    <li className='drop-down-items'><Link className='text-decoration-none drop-down-links'><i className="fa fa-cog drop-down-icons" aria-hidden="true"></i> Settings</Link></li>
                                    <li className='drop-down-items'><Link className='text-decoration-none drop-down-links'><i className="fa fa-user-plus drop-down-icons" aria-hidden="true"></i> Invite Friends</Link></li>
                                    <li className='drop-down-items'><Link className='text-decoration-none drop-down-links'><i class="fa fa-sign-out drop-down-icons" aria-hidden="true"></i> LOG OUT</Link></li>
                                </ul>
                            </div>}
                        </div>}
                    </div>
                </div>
                <Login show={this.state.login} toggle={()=>{}}/>
                <SignUp show={this.state.signup} toggle={()=>{}}/>
            </div>
         );
    }
}
 
export default Header;