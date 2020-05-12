import React, { Component } from 'react';
import '../../styles/reward/dropdown-menu.css'
import rewardPic from './images/rewardPic.png';
import { Dropdown, DropdownButton } from 'react-bootstrap';


class DropdownMenu extends Component {
    render() { 
        return ( 
            <div className="reward-head">
                <div className="catlog" style={{backgroundImage: `url(${rewardPic})`}}>
                        <h1 style={{color: '#FFF'}}>It's rewarding to take actions for Nigeria's public education!</h1><br/>
                        <h3 style={{color: '#F3E404', fontWeight:'500'}}>You earn ActBit Coins for every action you take. <br/> Use the 
                        coins to enter to win rewards.</h3>
                </div>
                <div className="dropdown-menus">
              
                </div>
            </div>
         );
    }
}

export default DropdownMenu;
