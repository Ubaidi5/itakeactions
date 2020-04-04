import React, { Component } from 'react';
import './header.css'
import logo from './logo-high-res.png' 
import ResponsiveMenu from './responsive-menu';
import Navbar from './navbar';
import ResponsiveNavbar from '../../Responsive-Navbar/responsive-navbar';
import './profile-menu.css'

class Header extends Component {
    constructor(){
        super()
        this.state = { sidebarStatus: false, Loggedin: false }

        this.sidebarHandler = this.sidebarHandler.bind(this)
        this.loginhandler = this.loginhandler.bind(this)
        this.logouthandler = this.logouthandler.bind(this)
    }
    
    sidebarHandler(){
        this.setState({sidebarStatus: !this.state.sidebarStatus})
    }

    loginhandler(){
        this.setState({Loggedin: true})
    }
    
    logouthandler(){
        this.setState({Loggedin: false})
    }

    render() { 
        let sidebar;
        let btnstyle=" fa fa-bars"
        let justTepmVar= <Login loginFunction = {this.loginhandler} />;

        if(this.state.sidebarStatus){
            sidebar = <ResponsiveNavbar />
            btnstyle= "fa fa-times"
        }
        if(this.state.Loggedin){
            justTepmVar = <Profile logoutFunction = {this.logouthandler}/>
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

                   {justTepmVar}

                </div>
                
            </div>
         );
    }
}

export default Header;

// Before Login

function Login(props){
        return ( 
            <div className='side-btn'>                               
                <i className="fa fa-search"></i>
                <button className="login" onClick={props.loginFunction}>LOGIN</button>
                <button className="signup">SIGN UP</button>
            </div>
        );
    
}

// when user is logged in

class Profile extends Component {

    constructor(){
        super()
        this.state = {profileMenuStatus: false}
        this.profileMenuHandler =this.profileMenuHandler.bind(this)
    }

    // profileMenuHandler controls the display of profile menu

    profileMenuHandler(){
        this.setState({ profileMenuStatus: !this.state.profileMenuStatus})
    }

    render() { 
        let profileMenu;
        let profileMenuUpDownbutton;

        if(this.state.profileMenuStatus){
            profileMenuUpDownbutton = "show-profile-menu-btn fa fa-chevron-up"
            profileMenu = <ProfileMenu logout = {this.props.logoutFunction} />
        }
        else{
            profileMenuUpDownbutton = "show-profile-menu-btn fa fa-chevron-down"
            profileMenu=null
        }

        return ( 
            <div id='profileBar' style={{display:'flex'}}>
                <i className="fa fa-search"></i>
                <div className='profile'>                              
                    <div className="profile-name">
                        <img src={require('./user.png')} alt="profile pic" id="profile-pic"/>
                        <div>
                            <h4 className="user-name">Charles Omofowan</h4>
                            <p style={{color:"#60AB30"}} className="coins-in-wallet">400 ActBit coins</p>
                        </div>  
                        <i class={profileMenuUpDownbutton} onClick={this.profileMenuHandler}></i>
                    </div>
                    {profileMenu}
                </div>
            </div>
         );
    }
}

function ProfileMenu(props){
    return(
        <div className="profile-menu">
            <ul className="profile-menu-items">
                <li><i class="fa fa-user"></i>My Profile</li>
                <li><i class="fa fa-money"></i>My Wallet</li>
                <li><i class="fa fa-gear"></i>Setting</li>
                <li><i class="fa fa-user-plus"></i>Invite Friends</li>
                <li id='logout' onClick={props.logout}><i class="fa fa-sign-out"></i>LOG OUT</li>
            </ul>
        </div>
    )
}