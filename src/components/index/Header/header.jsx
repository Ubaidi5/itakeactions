import React, { Component } from 'react'
import logo from './logo-high-res.png'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    
    state = {isLoggedin: false, sideMenuStatus: false }

    sideMenuHandler = ()=> {
        this.setState({sideMenuStatus: !this.state.sideMenuStatus})
    }

    signingHandler = () => {
        this.setState({isLoggedin: !this.state.isLoggedin})
        this.sideMenuHandler()
    }

    render() { 
        let displayStatus = {}
        let menubuttons = 'fa fa-bars'

            if(this.state.sideMenuStatus){
            
                displayStatus.display = 'block'; 
                menubuttons = 'fa fa-times'
            } 
            else{ displayStatus.display = 'none' }


// All components are here that are stored in variables


        let sidebarButton = <div className="res-menu-btn">                  
                                <a className={menubuttons} onClick={this.sideMenuHandler}></a>
                            </div>

        let iTakeActionLogo =  <div className="logo-image">                             
                                <a href="/"><img className="logo" src={logo} alt="iTakeAction"/></a>
                            </div>

        let navigationBar =   <div className="links">
                                <ul>
                                    <Link id='Link' to="/take-action"><li>TAKE ACTIONS</li></Link>
                                    <Link id='Link' to="/reward"><li>REWARD</li></Link>
                                    <Link id='Link' to="/submit-a-report"><li>SUBMIT A REPORT</li></Link>
                                    <Link id='Link' to="/blog"><li>BLOG</li></Link>
                                    <Link id='Link' to="/about-us"><li>ABOUT US</li></Link>
                                </ul>
                            </div>
        let searchBar = <div className="search-bar">
                            <input className='null' id='search-box' type="text" width='200px' />
                            <i className='fa fa-search' onClick={() => document.getElementById('search-box').classList.toggle('search-bar-input') }></i>
                        </div>
        let loginButtons = <div className='menu-style-btn' id='side-btn'>
                            <a href="#"><button className="login" onClick={this.signingHandler}><i className="fa fa-sign-in"></i> LOGIN</button></a>
                            <a href="#"><button className="signup"><i className="fa fa-user"></i> SIGN UP</button></a>
                        </div>
        let socialLinks = <div className="social-links">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
        const userProfile = <Profile logout = {this.signingHandler}/>
// What to Render
        let doRender, ifReponsive;
        if(this.state.isLoggedin){ 
            doRender = userProfile
            ifReponsive = userProfile
            loginButtons =null
        }
        else{ 
            doRender = loginButtons 
        }

        return (
            <header style={{width:'100%', height:'90px'}}>
{/* Web Layout */}
                <div className="head web-layout">
                    {iTakeActionLogo}
                    {navigationBar}
                    {searchBar}
                    {doRender}
                </div>
{/* Mobile Layout */}
                <div className="head mobile-layout">
                    {sidebarButton}
                    {iTakeActionLogo}
                    {searchBar}
                    {ifReponsive}
                    <div className="responsive-navigation-menu" style={displayStatus}>
                        {navigationBar}
                        {loginButtons}
                        {socialLinks}
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;


class Profile extends Component {
    
    state = {menuOn:false}
    
    showProfileMenuHandler = ()=>{
            this.setState({menuOn: !this.state.menuOn})
    }
    
    render() { 
        let menuDisplay = {display:'none'}
        let btnStyle = 'fa fa-chevron-down profile-menu-up-down-button'
        
        if(this.state.menuOn){
            menuDisplay.display="block"
            btnStyle = 'fa fa-chevron-up profile-menu-up-down-button'
        }
        
        return ( 
            <div id='profileBar'>
                <div className='profile'>                              
                    <div className="profile-info" style={{display:'flex'}}>
                        <img src={require('./user.png')} alt="profile pic" id="profile-pic"/>
                        <div>
                            <h4 className="user-name">Charles Omofowan</h4>
                            <p style={{color:"#60AB30"}} className="coins-in-wallet">400 ActBit coins</p>
                        </div>  
                        <i className={btnStyle} onClick={this.showProfileMenuHandler}></i>
                    </div>
                    <div className="profile-menu" style={menuDisplay}>
                        <ul className="menu-style-btn">
                            <li><i className="fa fa-user"></i>My Profile</li>
                            <li><i className="fa fa-money"></i>My Wallet</li>
                            <li><i className="fa fa-gear"></i>Setting</li>
                            <li><i className="fa fa-user-plus"></i>Invite Friends</li>
                            <li id='logout' onClick={this.props.logout}><i class="fa fa-sign-out"></i>LOG OUT</li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
